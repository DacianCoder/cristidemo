import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { Field } from 'react-final-form'
import DynamicFormattedMessage from '../components/common/ui/DynamicFormattedMessage'
import { signInWithGoogle } from '../api/firebase'
import { loggedInUserAtom } from '../recoil/atoms/generalAtoms'
import { WizardForm, WizardPage } from '../form/WizardForm'
import TextField from '../form/atoms/TextField'
import { Validations } from '../form/validation'
import { OnSubmit } from '../form/FormWrapper'
import { IFormExampleFields } from '../form/FinalForm.stories'
import CheckboxField from '../form/atoms/CheckboxField'

export const Questionnaire: FC = () => {
  const history = useHistory()
  const loggedUser = useRecoilValue(loggedInUserAtom)

  const onSubmit: OnSubmit<IFormExampleFields> = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <section className="container pt5">
      <div className="dFlex justifyContentCenter">
        {!loggedUser && (
          <button
            className="btn btnPrimary"
            onClick={() => signInWithGoogle(history)}
            style={{ backgroundColor: '#349eeb' }}
          >
            <img
              src="https://img.icons8.com/color/32/000000/google-logo.png"
              width={16}
              alt="google logo"
            />
            <DynamicFormattedMessage id="label.signup.google" />
          </button>
        )}
      </div>
      <div className="textCenter mb2 mt2">
        <h1>Would you like to take a questionnaire?</h1>
        <hr />
        <div>
          <WizardForm onSubmit={onSubmit}>
            <WizardPage>
              <div className="">
                <Field
                  name="name"
                  isMandatory={true}
                  wrapperClass="colMd4 mb15 offsetMd4"
                  component={TextField}
                  validate={Validations.required}
                />
                <Field
                  name="surname"
                  isMandatory={true}
                  wrapperClass="colMd4 mb15 offsetMd4"
                  component={TextField}
                  validate={Validations.required}
                />
                <Field
                  name="age"
                  isMandatory={true}
                  type="numeric"
                  validate={Validations.minimumAge(18)}
                  component={TextField}
                  wrapperClass="colMd4 mb15 offsetMd4"
                />
              </div>
            </WizardPage>
            <WizardPage>
              <Field
                name="email"
                isMandatory={true}
                wrapperClass="colMd4 mb15 offsetMd4"
                component={TextField}
                validate={Validations.matches()}
              />
              <Field
                name="city"
                isMandatory={true}
                wrapperClass="colMd4 mb15 offsetMd4"
                component={TextField}
                validate={Validations.required}
              />
            </WizardPage>
            <WizardPage>
              <Field
                name="acceptEmails"
                type="checkbox"
                isMandatory={true}
                wrapperClass="colMd4 mb15 offsetMd5"
                component={CheckboxField}
                validate={Validations.required}
              />
            </WizardPage>
          </WizardForm>
        </div>
      </div>
    </section>
  )
}
