import nodemailer from 'nodemailer'

/* The site's form notices go out through the kpintelligent.es mailbox at Dinahosting (the same server the
   Analizador uses). Variables in Easypanel: SMTP_USER and SMTP_PASSWORD (the mailbox), and optionally
   SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_FROM and CONTACT_TO. */

const DEFAULT_HOST = 'kpintelligent-es.correoseguro.dinaserver.com'
const DEFAULT_MAILBOX = 'marques@kpintelligent.es'

export class MailNotConfiguredError extends Error {}

function transport() {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD
  if (!user || !pass) throw new MailNotConfiguredError('Faltan SMTP_USER o SMTP_PASSWORD en el entorno del servidor')
  const port = Number(process.env.SMTP_PORT ?? 465)
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || DEFAULT_HOST,
    port,
    secure: (process.env.SMTP_SECURE ?? (port === 465 ? 'true' : 'false')) === 'true',
    auth: { user, pass },
  })
}

interface Notice {
  subject: string
  html: string
  /** the visitor's address, so «Responder» answers them */
  replyTo: string
}

/** sends a form notice to the owner; throws if the mailbox is not configured or the server refuses it */
export async function sendNotice({ subject, html, replyTo }: Notice): Promise<void> {
  const mailbox = process.env.SMTP_USER || DEFAULT_MAILBOX
  const to = process.env.CONTACT_TO || DEFAULT_MAILBOX
  const info = await transport().sendMail({
    from: process.env.SMTP_FROM || `Web KPIntelligent <${mailbox}>`,
    to,
    replyTo,
    subject,
    html,
  })
  // the mail server's own answer (its queue id), so a notice that does not arrive can be traced at Dinahosting
  console.log('Aviso del formulario aceptado por el servidor de correo', {
    de: mailbox,
    para: to,
    aceptados: info.accepted,
    rechazados: info.rejected,
    respuesta: info.response,
    id: info.messageId,
  })
  if (info.accepted.length === 0) throw new Error(`El servidor de correo no aceptó el destinatario ${to}`)
}
