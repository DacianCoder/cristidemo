import React, { FC } from 'react'
import { RecoilRoot } from 'recoil'
import { IntlProvider } from 'react-intl'
import messages from './i18n/en.json'

import './assets/styles/style.scss'

export const SetupWrapper: FC = ({ children }) => (
  <RecoilRoot>
    <IntlProvider locale="en" messages={messages}>
      {children}
    </IntlProvider>
  </RecoilRoot>
)
