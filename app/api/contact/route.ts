import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, service, budget, message } = await request.json();

    // Konfiguracja transportera (tutaj przykład dla Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Formularz kontaktowy" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // Twój adres
      subject: `Nowa wiadomość od ${name}`,
      html: `
        <h2>Nowa wiadomość z formularza</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email nadawcy:</strong> ${email}</p>
        <p><strong>Usługa:</strong> ${service || 'nie podano'}</p>
        <p><strong>Budżet:</strong> ${budget || 'nie podano'}</p>
        <p><strong>Wiadomość:</strong><br/>${message || 'brak'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Błąd wysyłania' }, { status: 500 });
  }
}