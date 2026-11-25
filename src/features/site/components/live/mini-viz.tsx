import type { CSSProperties } from 'react'
import type { DeepViz } from '@/data/aiDeepContent'

/* The small moving pictures at the top of a service or capability card. */

const v = (vars: Record<string, string | number>) => vars as CSSProperties

export function MiniViz({ kind }: { kind: DeepViz }) {
  switch (kind) {
    case 'radar':
      return (
        <div className="lv-mini lv-mini--radar" aria-hidden="true">
          <span className="lv-mini__sweep" />
          <i style={v({ '--x': '30%', '--y': '34%', '--d': '0.6s' })} />
          <i style={v({ '--x': '68%', '--y': '58%', '--d': '1.7s' })} />
          <i style={v({ '--x': '44%', '--y': '74%', '--d': '2.6s' })} />
        </div>
      )
    case 'nodes':
      return (
        <svg className="lv-mini lv-mini--nodes" viewBox="0 0 120 64" aria-hidden="true">
          <path d="M60 32 L18 14 M60 32 L18 50 M60 32 L102 14 M60 32 L102 50" />
          <path className="lv-mini__pulse" d="M18 14 L60 32 L102 50" pathLength={1} />
          <path className="lv-mini__pulse lv-mini__pulse--b" d="M18 50 L60 32 L102 14" pathLength={1} />
          <circle cx="60" cy="32" r="8" className="lv-mini__hub" />
          {[
            [18, 14],
            [18, 50],
            [102, 14],
            [102, 50],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
          ))}
        </svg>
      )
    case 'flow':
      return (
        <div className="lv-mini lv-mini--flow" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
          <i style={v({ '--d': '1s' })} />
          <i style={v({ '--d': '2s' })} />
        </div>
      )
    case 'chat':
      return (
        <div className="lv-mini lv-mini--chat" aria-hidden="true">
          <p>¿Margen de octubre?</p>
          <p>
            <i />
            <i />
            <i />
          </p>
        </div>
      )
    case 'doc':
      return (
        <div className="lv-mini lv-mini--doc" aria-hidden="true">
          <div className="lv-mini__page">
            <b />
            <b />
            <b />
            <b />
            <span className="lv-mini__scan" />
          </div>
          <ul>
            <li style={v({ '--d': '0.4s' })} />
            <li style={v({ '--d': '1.1s' })} />
            <li style={v({ '--d': '1.8s' })} />
          </ul>
        </div>
      )
    case 'shield':
      return (
        <div className="lv-mini lv-mini--shield" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
            <path className="lv-mini__tick" d="M8.5 12.5l2.5 2.5 4.5-5" pathLength={1} />
          </svg>
          <span />
          <span style={v({ '--d': '1s' })} />
        </div>
      )
    case 'wave':
      return (
        <svg className="lv-mini lv-mini--wave" viewBox="0 0 120 64" preserveAspectRatio="none" aria-hidden="true">
          <path className="lv-mini__area" d="M0 50 L15 44 L30 47 L45 36 L60 39 L75 28 L90 31 L105 18 L120 22 L120 64 L0 64 Z" />
          <path className="lv-mini__line" d="M0 50 L15 44 L30 47 L45 36 L60 39 L75 28 L90 31 L105 18 L120 22" pathLength={1} />
        </svg>
      )
    default:
      return (
        <div className="lv-mini lv-mini--bars" aria-hidden="true">
          {[72, 54, 88].map((w, i) => (
            <span key={w} style={v({ '--w': `${w}%`, '--d': `${i * 0.4}s` })} />
          ))}
        </div>
      )
  }
}
