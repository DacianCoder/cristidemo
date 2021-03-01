import React, { ReactElement } from 'react'
import { FieldError, UseFormMethods } from 'react-hook-form'
import DynamicFormattedMessage from '../../../../components/common/ui/DynamicFormattedMessage'

// TODO update to MUI
function YesNoInput({
  name,
  id,
  register,
  error,
}: {
  name: string
  id: string
  register: UseFormMethods['register']
  error?: FieldError | undefined
}): ReactElement {
  return (
    <div className="inputGroup colMd6 mb15">
      <DynamicFormattedMessage
        tag="label"
        id={`form.field.${name}.label`}
        className="inputLabel"
        htmlFor={id}
      />

      <div className="container">
        <div className="row">
          <div className="colMd6">
            <DynamicFormattedMessage tag="span" id="form.field.yes.label" />
            <input
              name={name}
              type="radio"
              value="Yes"
              id={id}
              ref={register({ required: true })}
            />
          </div>
          <div className="colMd6">
            <DynamicFormattedMessage tag="span" id="form.field.no.label" />
            <input
              name={name}
              type="radio"
              value="No"
              ref={register({ required: true })}
            />
          </div>
          {error && (
            <DynamicFormattedMessage
              tag="span"
              id={`form.validation.${
                ['pattern', 'validate'].includes(error.type)
                  ? error.message
                  : error.message || error.type
              }`}
              className="errorMessage"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default YesNoInput
