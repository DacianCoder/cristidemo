import React, { FC } from 'react'
import { RecoilRoot } from 'recoil'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import store from './store'
import messages from './i18n/en.json'

import './assets/styles/style.scss'

export const SetupWrapper: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <IntlProvider locale="en" messages={messages}>
          {children}
        </IntlProvider>
      </RecoilRoot>
    </Provider>
  )
}

// @ts-ignore Add store on window when running e2e tests
if (window.Cypress) window.store = store
