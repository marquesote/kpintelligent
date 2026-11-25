import type { CSSProperties } from 'react'
import { MAIN_ACTION } from '../../content'
import { photos } from '../../photos'
import { Arrow } from '../arrow'
import { Photo } from '../photo'

const twoPhoneScreens = { '--hm': 2 } as CSSProperties

export function DemoSection() {
  return (
    <section className="section" id="demo" style={twoPhoneScreens} aria-labelledby="demo-h">
      <div className="wrap grid grid--top">
        <div className="span-6">
          <div className="section-head">
            <h2 id="demo-h">Una demo con los números de su empresa</h2>
            <p>Cuéntenos qué ERP usa y qué quiere saber de su empresa. Le escribimos para fijar la fecha.</p>
          </div>
          <form
            className="form demo-form"
            action="/api/contact"
            method="post"
            data-endpoint="/api/contact"
            data-sending="Enviando"
            data-sent="Su solicitud de demo está enviada. Le escribimos para fijar la fecha."
            data-failed="No se ha enviado. Lo que ha escrito sigue aquí: inténtelo de nuevo o escríbanos a marques@kpintelligent.es."
            data-fix="Hay {n} campos por corregir."
            noValidate
          >
            <div className="field">
              <label htmlFor="f-name">Nombre</label>
              <input id="f-name" name="name" type="text" autoComplete="name" required minLength={2} aria-describedby="f-name-err" />
              <p className="field__error" id="f-name-err" hidden>
                Escriba su nombre.
              </p>
            </div>
            <div className="field">
              <label htmlFor="f-email">Correo</label>
              <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby="f-email-err" />
              <p className="field__error" id="f-email-err" hidden>
                Escriba un correo con @, como nombre@empresa.com.
              </p>
            </div>
            <div className="field field--full">
              <label htmlFor="f-message">Su empresa, su ERP y qué quiere saber</label>
              <textarea id="f-message" name="message" rows={4} required minLength={10} aria-describedby="f-message-err" />
              <p className="field__error" id="f-message-err" hidden>
                Escriba al menos una frase sobre su empresa y sus datos.
              </p>
            </div>
            <div className="btn-row">
              <button className="btn btn--primary" type="submit">
                {MAIN_ACTION}
                <Arrow />
              </button>
            </div>
            <p className="form__note">
              Usamos sus datos solo para contestarle: <a href="/privacidad">política de privacidad</a>.
            </p>
            <p className="form__status" role="status" data-form-status="" />
          </form>
        </div>
        <div className="frame frame--photo span-6 start-7">
          <Photo photo={photos.meeting} />
        </div>
      </div>
    </section>
  )
}
