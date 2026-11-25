import { ADVISORY_ACTION, ADVISORY_CONSENT } from '../advisory'
import { Arrow } from './arrow'
import { PRIVACY_PATH } from '@/config/legal'

interface TextFieldProps {
  id: string
  name: string
  label: string
  error: string
  type?: string
  autoComplete?: string
  required?: boolean
  minLength?: number
}

function TextField({ id, name, label, error, type = 'text', autoComplete, required, minLength }: TextFieldProps) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={type === 'email' ? 'email' : undefined}
        required={required}
        minLength={minLength}
        aria-describedby={`${id}-err`}
      />
      <p className="field__error" id={`${id}-err`} hidden>
        {error}
      </p>
    </div>
  )
}

/* posts to /api/contact with kind=informe; system.js checks it and sends it by fetch */
export function AdvisoryForm() {
  return (
    <form
      className="form demo-form"
      action="/api/contact"
      method="post"
      data-endpoint="/api/contact"
      data-sending="Enviando"
      data-sent="Su petición está enviada. Le escribimos al correo que nos ha dado."
      data-failed="No se ha enviado. Lo que ha escrito sigue aquí: inténtelo de nuevo o escríbanos a marques@kpintelligent.es."
      data-fix="Hay {n} campos por corregir."
      noValidate
    >
      <input type="hidden" name="kind" value="informe" />
      <TextField id="a-name" name="name" label="Nombre" error="Escriba su nombre." autoComplete="name" required minLength={2} />
      <TextField id="a-role" name="role" label="Cargo" error="Escriba su cargo." autoComplete="organization-title" />
      <TextField
        id="a-company"
        name="company"
        label="CIF o nombre de la empresa"
        error="Escriba el CIF o el nombre de su empresa."
        autoComplete="organization"
        required
        minLength={2}
      />
      <TextField
        id="a-email"
        name="email"
        type="email"
        label="Correo"
        error="Escriba un correo con @, como nombre@empresa.com."
        autoComplete="email"
        required
      />
      <div className="field field--full field--check">
        <input id="a-consent" name="consent" type="checkbox" value="si" required aria-describedby="a-consent-err" />
        <label htmlFor="a-consent">{ADVISORY_CONSENT}</label>
        <p className="field__note">
          Cómo tratamos sus datos: <a href={PRIVACY_PATH}>política de privacidad</a>.
        </p>
        <p className="field__error" id="a-consent-err" hidden>
          Marque la casilla para que podamos enviarle el informe.
        </p>
      </div>
      <div className="btn-row">
        <button className="btn btn--primary" type="submit">
          {ADVISORY_ACTION}
          <Arrow />
        </button>
      </div>
      <p className="form__status" role="status" data-form-status="" />
    </form>
  )
}
