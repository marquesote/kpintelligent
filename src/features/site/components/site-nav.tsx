import { MAIN_ACTION, navWords, solutionGroups } from '../content'

interface SiteNavProps {
  /** '' on the home page (links are #ids on it), '/' on an inner page */
  base: '' | '/'
}

export function SiteNav({ base }: SiteNavProps) {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Saltar al contenido
        </a>
        <a className="nav__logo" href={base === '' ? '#top' : '/'}>
          <img src="/assets/img/logo-128.png" alt="" width={32} height={32} />
          KPIntelligent
        </a>
        <nav className="nav__links" aria-label="Principal">
          <div className="nav__item">
            <a className="nav__link" href={`${base}#soluciones`}>
              Soluciones{' '}
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M3 4.5l3 3 3-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                {solutionGroups.map((group) => (
                  <div className="menu-col span-3" key={group.title}>
                    <p className="t-label">{group.title}</p>
                    {group.items.map((item) => (
                      <a href={item.href} key={item.href}>
                        {item.label}
                        <span>{item.line}</span>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {navWords.map((word) => (
            <div className="nav__item" key={word.id}>
              <a className="nav__link" href={`${base}#${word.id}`}>
                {word.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={`${base}#demo`}>
            {MAIN_ACTION}
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menú">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  )
}
