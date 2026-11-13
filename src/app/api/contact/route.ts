import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/config/siteConfig'

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

    const { name, email, message } = body
    const phone = typeof body.phone === 'string' ? body.phone : ''
    const company = typeof body.company === 'string' ? body.company : ''

    // Validate
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Nombre inválido' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Mensaje inválido' }, { status: 400 })
    }

    // Try to send email via Resend if configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: 'noreply@resend.dev',
          to: siteConfig.contact.email,
          subject: `Solicitud de demo de ${name.trim().replace(/\s+/g, ' ')}`,
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
        console.error('Error sending email:', emailError)
        // Continue - don't fail the request just because email didn't send
      }
    } else {
      console.log('Contact form submission (RESEND_API_KEY not configured):', {
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        phone: phone.trim(),
        message: message.trim().substring(0, 100) + '...',
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 })
  }
}
