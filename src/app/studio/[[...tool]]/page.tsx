'use client'

import dynamic from 'next/dynamic'
import type { NextStudioProps } from 'next-sanity/studio'

const NextStudio = dynamic<NextStudioProps>(
  () => import('next-sanity/studio').then((mod) => ({ default: mod.NextStudio })),
  { ssr: false }
)

// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('../../../../sanity.config').default

export default function StudioPage() {
  return <NextStudio config={config} />
}
