import React, { FC } from 'react'
import { RecoilRoot } from 'recoil'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import Toast from './components/Toast'

import messages from './i18n/en.json'

import './assets/styles/style.scss'

export const SetupWrapper: FC = ({ children }) => (
  <RecoilRoot>
    <BrowserRouter>
      <IntlProvider locale="en" messages={messages}>
        {children}
      </IntlProvider>
      <Toast />
    </BrowserRouter>
  </RecoilRoot>
)
