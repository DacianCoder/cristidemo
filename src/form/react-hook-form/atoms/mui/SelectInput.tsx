import React, { ReactElement } from 'react'
import { FieldError } from 'react-hook-form'
import DynamicFormattedMessage from '../../../../components/common/ui/DynamicFormattedMessage'

// TODO update to MUI
function SelectInput({
  name,
  id,
  register,
  error,
  options,
}: {
  name: string
  id: string
  register: (ref: HTMLSelectElement) => void
  error?: FieldError | undefined
  options: string[]
}): ReactElement {
  return (
    <div className="inputGroup colMd6 mb15">
      <DynamicFormattedMessage
        tag="label"
        id={`form.field.${name}.label`}
        className="inputLabel"
        htmlFor={id}
      />
      <select className="inputField wFull" name={name} id={id} ref={register}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
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

export default SelectInput
