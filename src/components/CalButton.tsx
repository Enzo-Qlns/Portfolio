'use client'

import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function MyApp() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: 'custom-need' })
      cal('floatingButton', {
        calLink: 'enzoquelenis/custom-need',
        config: { layout: 'month_view' },
        hideButtonIcon: false,
        buttonColor: '#111827',
        buttonTextColor: '#ffffff',
      })
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])
  return null;
}
