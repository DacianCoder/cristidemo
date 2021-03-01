import React, { FC } from 'react'
import { Meta, Story } from '@storybook/react'

import { Field } from 'react-final-form'
import { FormWrapper, OnSubmit } from './FormWrapper'
import TextField from './atoms/mui/TextField'
import { Validations } from './validation'
import {
  integerToLocaleString,
  localeStringToInteger,
} from '../../utils/number'
import { Condition } from './atoms/Condition'
import { FormButtons } from './atoms/FormButtons'
import CheckboxField from './atoms/mui/CheckboxField'
import { SetupWrapper } from '../../SetupWrapper'

export default {
  title: 'Form/FinalForm',
  component: FormWrapper,
} as Meta

export interface IFormExampleFields {
  name?: string
  surname?: string
  amount: number
  color: string
}
const Example: FC = () => {
  const onSubmit: OnSubmit<IFormExampleFields> = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <FormWrapper onSubmit={onSubmit}>
      {(formProps) => {
        return (
          <div className="container mt5">
            <div className="row">
              <Field
                name="name"
                isMandatory={true}
                wrapperClass="colMd6 mb15"
                component={TextField}
                validate={Validations.required}
              />
              <Field
                name="surname"
                wrapperClass="colMd6 mb15"
                component={TextField}
              />
              <Field
                name="amount"
                isMandatory={true}
                validate={Validations.composeValidators(
                  Validations.required,
                  Validations.minValue(1213)
                )}
                parse={(v) => localeStringToInteger(v)}
                format={(v) => integerToLocaleString(v)}
                component={TextField}
                wrapperClass="colMd6 mb15"
              />
              <div className="colMd6 mb15">
                <span className="inputLabel">Colors</span>
                <Field
                  name="color"
                  component="select"
                  multiple={false}
                  className="wFull inputField py0"
                  id="color"
                >
                  <option value="FF0000">Red</option>
                  <option value="00FF00">Green</option>
                  <option value="0000FF">Blue</option>
                  <option value="FF0000">Red</option>
                  <option value="00FF00">Green</option>
                  <option value="0000FF">Blue</option>
                </Field>
              </div>
              <div className="col mb15">
                <Field
                  type="checkbox"
                  name="isAdmin"
                  component={CheckboxField}
                />

                <div className="row">
                  <Condition when="isAdmin" is={true}>
                    <Field
                      name="address"
                      wrapperClass="col6"
                      component={TextField}
                      validate={Validations.required}
                      isMandatory={true}
                    />
                  </Condition>
                </div>
              </div>
              <div className="col12 mt5 dFlex justifyContentCenter">
                <FormButtons {...formProps} />
              </div>
            </div>
          </div>
        )
      }}
    </FormWrapper>
  )
}

const Template: Story<any> = () => (
  <SetupWrapper>
    <Example />
  </SetupWrapper>
)

export const MUI = Template.bind({})
MUI.args = {}
