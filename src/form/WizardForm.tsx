import React, { FC, ReactElement, ReactNode, useState } from 'react'

import { FormWrapper, IFormConfig } from './FormWrapper'
import DynamicFormattedMessage from '../components/common/ui/DynamicFormattedMessage'
import Button from '../components/common/ui/button/Button'

export const WizardPage: FC = ({ children }) => <>{children}</>

export function WizardForm<FormValues>({
  children,
  onSubmit,
  initialValues,
}: IFormConfig<FormValues, ReactNode[]>) {
  const [page, setPage] = useState(0)
  const isLastPage = page === React.Children.count(children) - 1
  const activePage = React.Children.toArray(children)[page] as ReactElement<
    IFormConfig<Partial<FormValues>>
  >

  const onValidate = (values: FormValues) => {
    if (activePage.props.validate) {
      return activePage.props.validate(values)
    }
  }

  const onSubmitPage: IFormConfig<FormValues>['onSubmit'] = (...args) => {
    if (!isLastPage) {
      return setPage(page + 1)
    }
    return onSubmit(...args)
  }

  return (
    <FormWrapper
      initialValues={initialValues}
      onSubmit={onSubmitPage}
      validate={onValidate}
      subscription={undefined}
    >
      {({ submitting, values, valid }) => (
        <>
          {activePage}
          <div className="dFlex justifyContentCenter">
            {page > 0 && (
              <DynamicFormattedMessage
                tag={Button}
                id="form.button.previous"
                onClick={() => setPage(page - 1)}
                className="btn btnPrimary mx5"
              />
            )}
            {!isLastPage && valid && (
              <DynamicFormattedMessage
                tag={Button}
                id="form.button.next"
                type="submit"
                disabled={submitting}
                className="btn btnPrimary mx5"
              />
            )}
            {isLastPage && (
              <DynamicFormattedMessage
                tag={Button}
                type="submit"
                id="form.button.save"
                disabled={submitting}
                className="btn btnPrimary"
              />
            )}
          </div>
          <pre className="mt3">{JSON.stringify(values, undefined, 2)}</pre>
        </>
      )}
    </FormWrapper>
  )
}
