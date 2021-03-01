import React, { ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import messages from '../i18n/en.json'

interface ProviderWrapper {
  children: ReactElement
}

interface IntlProviderWrapper extends ProviderWrapper {
  msg?: { [propName: string]: string }
}

/**
 * Adds Intl to provided component
 * @param props
 */
export const intlProviderWrapper = (
  props: IntlProviderWrapper
): RenderResult => {
  const { children, msg } = props
  const defaultMessages = msg || messages
  return render(
    <IntlProvider locale="en" messages={defaultMessages}>
      {children}
    </IntlProvider>
  )
}

