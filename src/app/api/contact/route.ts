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
        message: 'Message delivered directly to Gmail inbox.',
      });
    }

    // Method 2: Fallback to FormSubmit AJAX API with origin headers
    const origin =
      request.headers.get('origin') ||
      request.headers.get('referer') ||
      'https://biruk-portfolio.vercel.app';

    const response = await fetch('https://formsubmit.co/ajax/biruk.ayele.birhanu@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: origin,
        Referer: origin,
      },
      body: JSON.stringify({
        name,
        email,
        _subject: subject || `Portfolio Inquiry from ${name}`,
        message,
        _template: 'table',
      }),
    });

    const data = await response.json();

    // FormSubmit returns HTTP 200 even when success is 'false' (e.g., activation needed)
    if (data.success === 'false' || data.success === false) {
      return NextResponse.json(
        {
          error:
            data.message ||
            'Form activation required. Please check your Gmail (biruk.ayele.birhanu@gmail.com) for the one-time FormSubmit activation link.',
          needsActivation: true,
        },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          'Failed to send message. Please check your email configuration.',
      },
      { status: 500 }
    );
  }
}
