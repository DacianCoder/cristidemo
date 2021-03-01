import React, { useEffect, useState } from 'react'
import DynamicFormattedMessage from './common/ui/DynamicFormattedMessage'
import Button from './common/ui/button/Button'
import { promptInstall } from '../../public/worker'

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false)
  const [prompt, setPromptInstall] = useState<any>(null)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setTimer(setInterval(() => {
      if (promptInstall) {
        console.log(promptInstall)
        setPromptInstall(promptInstall)
        setSupportsPWA(true)
        setTimer(t => {
          t && clearInterval(t)
          return null
        })
      }
    }, 1000))

    return () => {
      timer && clearInterval(timer)
    }
  }, [])

  const onClick = (evt: any) => {
    evt.preventDefault()
    prompt?.prompt()
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