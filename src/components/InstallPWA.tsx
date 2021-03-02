import React from 'react'
import DynamicFormattedMessage from './common/ui/DynamicFormattedMessage'
import Button from './common/ui/button/Button'

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt: any

window.addEventListener('beforeinstallprompt', (e: any) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e
  // Update UI notify the user they can install the PWA
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`)
})

const InstallPWA = () => {
  const onClick = (evt: any) => {
    evt.preventDefault()
    console.log(deferredPrompt)
    deferredPrompt?.prompt()
  }

  return (
    <DynamicFormattedMessage
      className="btn btnPrimary mt5"
      onClick={onClick}
      id="install"
      tag={Button}
    />
  )
}

export default InstallPWA
