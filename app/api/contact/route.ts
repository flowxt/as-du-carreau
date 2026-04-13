import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, city, service, message } = body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants.' },
        { status: 400 }
      );
    }

    const serviceLabels: Record<string, string> = {
      carrelage: 'Carrelage & Faïence',
      mosaique: 'Mosaïque',
      sdb: "Salle de bain / Douche à l'italienne",
      exterieur: 'Terrasse / Piscine / Extérieur',
      preparation: 'Travaux de préparation',
      autre: 'Autre projet',
    };

    const serviceLabel = service ? (serviceLabels[service] || service) : 'Non précisé';

    await resend.emails.send({
      from: 'Contact L\'as Du Carreau <onboarding@resend.dev>',
      to: 'ldc38120@gmail.com',
      replyTo: email,
      subject: `Nouvelle demande de devis – ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #1a1a1a; padding: 32px; text-align: center; margin-bottom: 32px;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">
              L'as Du Carreau
            </h1>
            <p style="color: #7f7f7f; font-size: 13px; margin: 8px 0 0; letter-spacing: 1px;">
              NOUVELLE DEMANDE DE DEVIS
            </p>
          </div>

          <div style="padding: 0 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; width: 40%; color: #7f7f7f; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Prénom</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 15px; font-weight: bold;">${firstName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #7f7f7f; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Nom</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 15px; font-weight: bold;">${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #7f7f7f; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #7f7f7f;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #7f7f7f; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Téléphone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 15px;">
                  <a href="tel:${phone}" style="color: #7f7f7f;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #7f7f7f; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Ville</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 15px;">${city || 'Non précisée'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #7f7f7f; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Type de projet</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 15px;">${serviceLabel}</td>
              </tr>
            </table>

            <div style="margin-top: 32px; padding: 24px; background: #f8f7f4; border-left: 4px solid #7f7f7f;">
              <p style="color: #7f7f7f; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">Message</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 32px; text-align: center; padding: 24px; background: #1a1a1a;">
              <a href="mailto:${email}" style="display: inline-block; background: #7f7f7f; color: white; padding: 14px 32px; text-decoration: none; font-size: 13px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">
                Répondre à ${firstName}
              </a>
            </div>
          </div>

          <div style="margin-top: 32px; padding: 16px 24px; text-align: center; color: #aaa; font-size: 12px; border-top: 1px solid #e5e5e5;">
            L'as Du Carreau · Saint-Égrève · 06 29 93 72 94
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
