import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const TURNSTILE_SECRET_KEY = Deno.env.get('TURNSTILE_SECRET_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  const data = await res.json();
  console.log('Turnstile verification result:', data);
  return data.success === true;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log('RESEND_API_KEY present:', !!RESEND_API_KEY);
    console.log('TURNSTILE_SECRET_KEY present:', !!TURNSTILE_SECRET_KEY);

    const text = await req.text();
    console.log('Request body length:', text.length);

    if (!text) {
      return new Response(
        JSON.stringify({ error: 'Empty request body' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { to, subject, html, turnstileToken } = JSON.parse(text);

    // Verify Turnstile token
    if (!turnstileToken) {
      console.log('Missing Turnstile token');
      return new Response(
        JSON.stringify({ error: 'Missing CAPTCHA token' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const isHuman = await verifyTurnstile(turnstileToken);
    if (!isHuman) {
      console.log('Turnstile verification failed');
      return new Response(
        JSON.stringify({ error: 'CAPTCHA verification failed' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Turnstile verified ✓');
    console.log('Sending to:', to, '| Subject:', subject);

    if (!to || !subject || !html) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: to, subject, html' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Dillon & Bird <noreply@support.dillonbird.com>',
        to,
        subject,
        html,
      }),
    });

    const data = await res.json();
    console.log('Resend response status:', res.status);
    console.log('Resend response:', JSON.stringify(data));

    return new Response(
      JSON.stringify(data),
      {
        status: res.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Edge function error:', String(error));
    return new Response(
      JSON.stringify({ error: String(error) }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});