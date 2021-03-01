import React, { useEffect, useState } from 'react'
import DynamicFormattedMessage from './common/ui/DynamicFormattedMessage'
import Button from './common/ui/button/Button'


const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false)
  const [promptInstall, setPromptInstall] = useState<any>(null)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      console.log('PWA install allowed')
      setSupportsPWA(true)
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('transitionend', handler)
  }, [])

  const onClick = (evt: any) => {
    evt.preventDefault()
    promptInstall?.prompt()
  }
  if (!supportsPWA) {
    return null
  }

  return (
    <DynamicFormattedMessage className={'btn btnPrimary mt5'} onClick={onClick}
                             id={'install'} tag={Button} />
  )

}

export default InstallPWA