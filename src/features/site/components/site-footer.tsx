import { MAIN_ACTION, solutionGroups } from '../content'
import { Arrow } from './arrow'

interface SiteFooterProps {
  base: '' | '/'
}

export function SiteFooter({ base }: SiteFooterProps) {
  return (
    <>
      <footer className="footer closing" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--word">
            <div className="section-head--split">
              <div>
                <h2 id="close-h">Vea sus números en una demo</h2>
                <p className="t-lead">Con la contabilidad de su propia empresa, no con un ejemplo.</p>
              </div>
              <a className="btn btn--primary" href={`${base}#demo`}>
                {MAIN_ACTION}
                <Arrow />
              </a>
            </div>
            <p className="close__word" aria-hidden="true">
              KPIntelligent
            </p>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className={`${solutionGroups.length > 4 ? 'span-2' : 'span-4'} stack-4`}>
                <a className="nav__logo" href={base === '' ? '#top' : '/'}>
                  <img src="/assets/img/logo-128.png" alt="" width={32} height={32} loading="lazy" />
                  KPIntelligent
                </a>
                <p className="footer__lede">Análisis financiero con IA, desde Madrid.</p>
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
