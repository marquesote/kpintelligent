'use client'

import { useEffect } from 'react'

const KIT_SCRIPTS = [
  '/assets/system.js',
  '/assets/motion/motion.js',
  '/assets/layout/layout.js',
  '/assets/diagrams/mount.js',
]

/**
 * The design kit's scripts change the DOM (the nav sheet, hovers, moments), so they are added
 * only after React has hydrated the page: loaded earlier they would cause a hydration mismatch.
 */
export function KitScripts() {
  useEffect(() => {
    for (const src of KIT_SCRIPTS) {
      if (document.querySelector(`script[data-kit="${src}"]`)) continue
      const script = document.createElement('script')
      script.type = 'module'
      script.src = src
      script.dataset.kit = src
      document.body.appendChild(script)
    }
  }, [])

  return null
}
