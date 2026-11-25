/* The hologram's globe: a wireframe sphere whose meridians turn (SVG animation, no script), glowing nodes,
   arcs of data between them and a satellite on a tilted orbit. */

const R = 72
const PARALLELS = [-60, -30, 0, 30, 60]
const MERIDIANS = 6
const DUR = 9
const NODES = [
  [72, 78],
  [128, 70],
  [110, 118],
  [62, 124],
  [140, 112],
  [96, 92],
]
const ARCS = [
  'M72 78 Q100 40 128 70',
  'M62 124 Q86 96 110 118',
  'M96 92 Q124 74 140 112',
  'M72 78 Q60 104 62 124',
]

export function HoloGlobe() {
  return (
    <svg className="lv-globe" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <radialGradient id="lv-globe-fill" cx="38%" cy="32%" r="72%">
          <stop offset="0" stopColor="#9be3ff" stopOpacity=".55" />
          <stop offset=".55" stopColor="#2f8cff" stopOpacity=".22" />
          <stop offset="1" stopColor="#0b5fd0" stopOpacity=".06" />
        </radialGradient>
        <radialGradient id="lv-globe-halo" cx="50%" cy="50%" r="50%">
          <stop offset=".62" stopColor="#5cc8ff" stopOpacity=".28" />
          <stop offset="1" stopColor="#5cc8ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="98" fill="url(#lv-globe-halo)" />
      {Array.from({ length: 9 }, (_, i) => (
        <line
          key={`ray-${i}`}
          className="lv-ray"
          x1={100 + (i - 4) * 9}
          y1="30"
          x2={100 + (i - 4) * 22}
          y2="0"
          style={{ animationDelay: `${(i * 0.37) % 2}s` }}
        />
      ))}
      <circle cx="100" cy="100" r={R} fill="url(#lv-globe-fill)" className="lv-globe__rim" />
      {PARALLELS.map((lat) => {
        const rad = (lat * Math.PI) / 180
        const rx = R * Math.cos(rad)
        return (
          <ellipse
            key={lat}
            className="lv-globe__line"
            cx="100"
            cy={100 + R * Math.sin(rad)}
            rx={rx}
            ry={rx * 0.2}
          />
        )
      })}
      {Array.from({ length: MERIDIANS }, (_, i) => (
        <ellipse key={`m-${i}`} className="lv-globe__line" cx="100" cy="100" rx={R} ry={R}>
          <animate
            attributeName="rx"
            values={`${R};0;${R}`}
            keyTimes="0;.5;1"
            calcMode="spline"
            keySplines=".42 0 1 1;0 0 .58 1"
            dur={`${DUR}s`}
            begin={`-${((i * DUR) / MERIDIANS).toFixed(2)}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      ))}
      {ARCS.map((d, i) => (
        <path key={d} className="lv-arc" d={d} style={{ animationDelay: `${i * 0.7}s` }} />
      ))}
      {NODES.map(([cx, cy], i) => (
        <g key={`n-${i}`}>
          <circle className="lv-node__ping" cx={cx} cy={cy} r="3" style={{ animationDelay: `${i * 0.45}s` }} />
          <circle className="lv-node" cx={cx} cy={cy} r="2.4" />
        </g>
      ))}
      <ellipse className="lv-orbit" cx="100" cy="100" rx="94" ry="24" transform="rotate(-16 100 100)" />
      <g transform="rotate(-16 100 100)">
        <circle r="3.2" className="lv-sat">
          <animateMotion dur="7s" repeatCount="indefinite" path="M6 100 a94 24 0 1 0 188 0 a94 24 0 1 0 -188 0" />
        </circle>
      </g>
    </svg>
  )
}
