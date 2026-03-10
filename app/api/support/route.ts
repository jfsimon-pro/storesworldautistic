import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SUPPORT_EMAIL_USER,
        pass: process.env.SUPPORT_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SUPPORT_EMAIL_USER,
      to: 'jfsimon.pro@gmail.com',
      subject: `[World Autistic Support] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('[SUPPORT] Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
