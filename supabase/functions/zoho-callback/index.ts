import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

serve(async (req) => {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response(JSON.stringify({ error: 'Missing code' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ZOHO_CLIENT_ID     = Deno.env.get('ZOHO_CLIENT_ID')!;
  const ZOHO_CLIENT_SECRET = Deno.env.get('ZOHO_CLIENT_SECRET')!;
  const REDIRECT_URI       = 'https://mxyznpozvpwcdleuuzwv.supabase.co/functions/v1/zoho-callback';

  const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type:    'authorization_code',
      client_id:     ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      redirect_uri:  REDIRECT_URI,
      code,
    }),
  });

  const data = await response.json();

  // Show the tokens in browser so you can copy refresh_token
  return new Response(
    JSON.stringify(data, null, 2),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
});