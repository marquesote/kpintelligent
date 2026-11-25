import { MAIN_ACTION, solutionGroups } from '../content'
import { Arrow } from './arrow'

interface SiteFooterProps {
  base: '' | '/'
}

export function SiteFooter({ base }: SiteFooterProps) {
  return (
    <>
      <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--photo">
            <div className="section-head--split">
              <div>
                <h2 id="close-h">Una demo gratuita de BI e IA</h2>
                <p className="t-lead">Consultora de datos, BI e inteligencia artificial en Madrid.</p>
              </div>
              <a className="btn btn--primary" href={`${base}#demo`}>
                {MAIN_ACTION}
                <Arrow />
              </a>
            </div>
            <div className="close__media">
              <picture>
                <source media="(max-width: 639px)" srcSet="/assets/img/photo-f198698611-phone.webp" />
                <img
                  src="/assets/img/photo-f198698611-band.webp"
                  width={1920}
                  height={500}
                  alt="Línea de producción automatizada vista desde arriba"
                  loading="lazy"
                  decoding="async"
                  data-source="stand-in"
                  data-subject="stand-in"
                />
              </picture>
            </div>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo" href={base === '' ? '#top' : '/'}>
                  <img src="/assets/img/logo-128.png" alt="" width={32} height={32} loading="lazy" />
                  KPIntelligent
                </a>
              </div>
              {solutionGroups.map((group) => (
                <div className="span-2 footer__col" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="footer__legal">
              <span>
                &copy; 2026 KPIntelligent. Los nombres y logotipos de productos son marcas de sus
                propietarios.
              </span>
              <div className="socials" />
              <a className="credits" href="/credits.html">
                Fotografías vía Wikimedia Commons
              </a>
            </div>
          </div>
        </div>
      </footer>
      <nav className="actionbar" aria-label="Acción rápida">
        <a className="btn btn--primary" href={`${base}#demo`}>
          {MAIN_ACTION}
        </a>
      </nav>
    </>
  )
}
