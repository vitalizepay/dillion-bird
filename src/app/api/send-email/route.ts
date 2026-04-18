import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { to, subject, html } = body;

  try {
    await resend.emails.send({
      from: 'Dillon & Bird <noreply@support.dillonbird.com>',
      to,
      subject,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}