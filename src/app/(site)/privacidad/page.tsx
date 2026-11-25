import type { Metadata } from 'next'
import { SiteNav } from '@/features/site/components/site-nav'
import { SiteFooter } from '@/features/site/components/site-footer'
import { LEGAL, LEGAL_PENDIENTE } from '@/config/legal'
import { ADVISORY_CONSENT } from '@/features/site/advisory'

export const metadata: Metadata = {
  title: 'Política de privacidad · KPIntelligent',
  description: 'Qué datos recogen los formularios de kpintelligent.es, para qué se usan, cuánto tiempo se guardan y cómo ejercer sus derechos.',
  alternates: { canonical: '/privacidad' },
  robots: LEGAL_PENDIENTE ? { index: false, follow: false } : undefined,
}

export default function PrivacyPage() {
  return (
    <>
      <SiteNav base="/" />
      <main id="top">
        <section className="section legal" aria-labelledby="privacidad-h">
          <div className="wrap legal__body">
            <h1 id="privacidad-h">Política de privacidad</h1>
            <p className="legal__date">Última actualización: {LEGAL.actualizado}</p>
            {LEGAL_PENDIENTE ? (
              <p className="legal__draft" role="note">
                Borrador: faltan los datos del responsable del tratamiento. Deben completarse, y el texto revisarse con un
                asesor legal, antes de publicar.
              </p>
            ) : null}

            <h2>1. Quién es el responsable</h2>
            <p>
              {LEGAL.responsable} · NIF {LEGAL.nif} · {LEGAL.domicilio} · Correo para cualquier asunto de privacidad:{' '}
              {LEGAL.email}
            </p>

            <h2>2. Qué datos recogemos</h2>
            <p>Solo los que usted escribe en los formularios de esta web:</p>
            <ul>
              <li>
                <strong>Solicitud de demo:</strong> nombre, correo y lo que nos cuenta de su empresa y de sus datos.
              </li>
              <li>
                <strong>Petición del informe financiero de su empresa:</strong> nombre, cargo, CIF o nombre de la empresa y
                correo. Guardamos también la fecha y el texto que aceptó: «{ADVISORY_CONSENT}»
              </li>
            </ul>
            <p>
              Para hacer el informe usamos las cuentas anuales que su empresa deposita en el Registro Mercantil, que son
              públicas, y que obtenemos a través de Informa D&amp;B. Para pedirlas solo usamos el CIF de la empresa: no
              enviamos sus datos personales.
            </p>

            <h2>3. Para qué los usamos y con qué base legal</h2>
            <ul>
              <li>
                <strong>Contestar su solicitud de demo</strong> y preparar la reunión que nos pide: aplicación de medidas
                precontractuales a petición suya (art. 6.1.b del Reglamento General de Protección de Datos).
              </li>
              <li>
                <strong>Enviarle el informe de su empresa</strong> y contestar las preguntas que nos haga sobre él: su
                consentimiento (art. 6.1.a), que puede retirar en cualquier momento escribiendo a {LEGAL.email}. Retirarlo no
                afecta a lo que ya se hizo antes.
              </li>
            </ul>
            <p>
              No le enviaremos otras comunicaciones comerciales si no nos las pide. No tomamos decisiones automatizadas ni
              hacemos perfiles con sus datos.
            </p>

            <h2>4. Cuánto tiempo los guardamos</h2>
            <p>
              Si llega a ser cliente, mientras dure la relación y, después, el tiempo que exija la ley. Si no, {LEGAL.conservacion}.
              Pasado ese plazo los borramos, salvo el registro del permiso que aceptó, que guardamos bloqueado solo para poder
              demostrarlo si hiciera falta, durante el plazo en que podría reclamarse.
            </p>

            <h2>5. Quién más los ve</h2>
            <p>No vendemos ni cedemos sus datos a nadie. Para prestar el servicio usamos dos proveedores que los tratan por cuenta nuestra:</p>
            <ul>
              <li>
                <strong>OVH:</strong> el servidor donde funciona esta web, en Alemania.
              </li>
              <li>
                <strong>Dinahosting:</strong> el servidor de correo por el que nos llegan sus solicitudes, en España.
              </li>
            </ul>
            <p>Los dos están en la Unión Europea: sus datos no salen de ella.</p>

            <h2>6. Cookies</h2>
            <p>
              Esta web no instala cookies ni usa herramientas de analítica o de publicidad. Para mostrar los tipos de letra, su
              navegador los descarga de Google Fonts, que recibe la dirección IP de su conexión como en cualquier descarga.
            </p>

            <h2>7. Sus derechos</h2>
            <p>
              Puede pedirnos el acceso a sus datos, su rectificación o su supresión, oponerse a su uso o pedir que lo limitemos y
              que se los entreguemos en un formato que pueda llevar a otro sitio. Escríbanos a {LEGAL.email}. Si cree que no
              hemos atendido bien su petición, puede reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>
          </div>
        </section>
      </main>
      <SiteFooter base="/" />
    </>
  )
}
