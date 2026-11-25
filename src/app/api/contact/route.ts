import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/config/siteConfig'
import { MailNotConfiguredError, sendNotice } from '@/lib/email/smtp'
import { ADVISORY_CONSENT } from '@/features/site/advisory'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: NextRequest) {
  try {
    // The site's form posts FormData; JSON is still accepted.
    const contentType = request.headers.get('content-type') ?? ''
    const body: Record<string, unknown> = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries(await request.formData())

    const { name, email } = body
    const phone = typeof body.phone === 'string' ? body.phone : ''
    const company = typeof body.company === 'string' ? body.company : ''
    const role = typeof body.role === 'string' ? body.role : ''
    const isReport = body.kind === 'informe'
    const acceptedAt = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })
    // the report request has no message: it is built from the company and the permission the person accepted
    const message = isReport
      ? `Petición del informe financiero de la empresa: ${company.trim()}
Cargo: ${role.trim() || 'No indicado'}
Permiso aceptado el ${acceptedAt}: «${ADVISORY_CONSENT}»`
      : body.message

    // Validate
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Nombre inválido' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    if (isReport && (company.trim().length < 2 || body.consent !== 'si')) {
      return NextResponse.json({ error: 'Faltan la empresa o el permiso' }, { status: 400 })
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Mensaje inválido' }, { status: 400 })
    }

    // The notice goes out through the kpintelligent.es mailbox. If it cannot be sent the visitor is told so
    // (the form keeps what they wrote): a request is never reported as sent when nobody received it.
    try {
      await sendNotice({
          replyTo: email.trim(),
          subject: `${isReport ? 'Petición de informe financiero' : 'Solicitud de demo'} de ${name.trim().replace(/\s+/g, ' ')}`,
          html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(name.trim())}</p>
            <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
            <p><strong>Empresa:</strong> ${escapeHtml(company.trim()) || 'No indicada'}</p>
            <p><strong>Teléfono:</strong> ${escapeHtml(phone.trim()) || 'No proporcionado'}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>
            <hr>
            <p style="color:#666;font-size:12px;">Enviado desde el formulario de contacto de ${siteConfig.companyName}</p>
          `,
      })
    } catch (emailError) {
      const notConfigured = emailError instanceof MailNotConfiguredError
      console.error(
        notConfigured ? 'Formulario sin enviar: falta configurar el buzón' : 'Formulario sin enviar: el servidor de correo lo rechazó',
        notConfigured ? '' : emailError,
        { name: name.trim(), email: email.trim(), company: company.trim() },
      )
      return NextResponse.json({ error: 'No se ha podido enviar' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 })
  }
}
