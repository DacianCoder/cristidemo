import React, { ReactElement } from 'react'
import { FieldError } from 'react-hook-form'
import DynamicFormattedMessage from '../../../components/common/ui/DynamicFormattedMessage'

function Checkbox({
  name,
  id,
  register,
  error,
}: {
  name: string
  id: string
  register: (ref: HTMLInputElement) => void
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
        <input name={name} type="checkbox" value="1" id={id} ref={register} />
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
  )
}

export default Checkbox
