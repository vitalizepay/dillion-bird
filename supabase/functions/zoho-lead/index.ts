import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const ZOHO_CLIENT_ID     = Deno.env.get('ZOHO_CLIENT_ID')!;
const ZOHO_CLIENT_SECRET = Deno.env.get('ZOHO_CLIENT_SECRET')!;
const ZOHO_REFRESH_TOKEN = Deno.env.get('ZOHO_REFRESH_TOKEN')!;

async function getAccessToken(): Promise<string> {
  const res = await fetch(
    `https://accounts.zoho.com/oauth/v2/token?refresh_token=${ZOHO_REFRESH_TOKEN}&client_id=${ZOHO_CLIENT_ID}&client_secret=${ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
    { method: 'POST' }
  );
  const data = await res.json();
  return data.access_token;
}

async function findExistingLead(email: string, token: string) {
  try {
    const res = await fetch(
      `https://www.zohoapis.com/crm/v3/Leads/search?criteria=(Email:equals:${encodeURIComponent(email)})`,
      { headers: { Authorization: `Zoho-oauthtoken ${token}` } }
    );
    const data = await res.json();
    return data?.data?.[0] || null;
  } catch {
    return null;
  }
}

async function sendLeadToZoho(formType: string, leadData: Record<string, string>) {
  const token = await getAccessToken();

  const payload = {
    First_Name:       leadData.firstName  || '',
    Last_Name:        leadData.lastName   || '(not provided)',
    Email:            leadData.email      || '',
    Phone:            leadData.phone      || '',
    Company:          leadData.company    || '',
    Lead_Source:      'Web Form',
    Lead_Source_Form: formType,
    Description:      leadData.message   || '',
  };

  const existing = await findExistingLead(leadData.email, token);

  if (existing) {
    await fetch(
      `https://www.zohoapis.com/crm/v3/Leads/${existing.id}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [payload] }),
      }
    );
    console.log('Zoho lead updated:', existing.id);
  } else {
    await fetch(
      'https://www.zohoapis.com/crm/v3/Leads',
      {
        method: 'POST',
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [payload] }),
      }
    );
    console.log('Zoho lead created');
  }
}

serve(async (req) => {
  try {
    const payload = await req.json();

    // Supabase webhook sends: { type, table, record, old_record }
    const { table, record } = payload;

    // Map each table to a form type and extract fields
    const tableMap: Record<string, { formType: string; company: string }> = {
      accounting_book_keeping_leads: { formType: 'Accounting & Bookkeeping Form', company: 'company_name' },
      audit_leads:                   { formType: 'Audit Form',                    company: 'company_name' },
      company_formation_leads:       { formType: 'Company Formation Form',        company: 'company_name' },
      cmo_leads:                     { formType: 'CMO Form',                      company: 'company_name' },
      insolvency_leads:              { formType: 'Insolvency Form',               company: 'company_name' },
      banking_leads:                 { formType: 'Banking Form',                  company: 'company_name' },
      technology_consulting_leads:   { formType: 'Technology Consulting Form',    company: 'company_name' },
      contact_leads:                 { formType: 'Contact Form',                  company: 'company'      },
    };

    const mapping = tableMap[table];
    if (!mapping) {
      return new Response(JSON.stringify({ error: 'Unknown table' }), { status: 400 });
    }

    await sendLeadToZoho(mapping.formType, {
      firstName: record.first_name || record.name?.split(' ')[0] || '',
      lastName:  record.last_name  || record.name?.split(' ').slice(1).join(' ') || '',
      email:     record.email      || '',
      phone:     record.phone      || '',
      company:   record[mapping.company] || '',
      message:   record.message    || '',
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error('zoho-lead error:', String(err));
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
});