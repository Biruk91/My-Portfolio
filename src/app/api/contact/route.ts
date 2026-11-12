import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    // Method 1: Direct Gmail SMTP via Nodemailer (100% reliable, zero middle-man)
    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      await transporter.sendMail({
        from: `"${name} (Portfolio)" <${emailUser}>`,
        to: 'biruk.ayele.birhanu@gmail.com',
        replyTo: email,
        subject: subject || `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; color: #1e1e1e; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h2 style="color: #0078ff; margin-top: 0;">New Message from Portfolio</h2>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0078ff;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || 'Portfolio Inquiry'}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="margin: 8px 0;"><strong>Message:</strong></p>
            <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #0078ff; border-radius: 4px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        smtpConfigured: true,
        message: 'Message delivered directly to Gmail inbox.',
      });
    }

    // If EMAIL_USER/EMAIL_PASS are not configured on Netlify environment,
    // tell client to submit directly from browser (which avoids Cloudflare datacenter IP blocks).
    return NextResponse.json({
      success: false,
      smtpConfigured: false,
      message: 'Server SMTP not configured. Falling back to browser client delivery.',
    });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          'Failed to send message. Please check your email configuration.',
      },
      { status: 500 }
    );
  }
}
