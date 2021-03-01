import React, { FC } from 'react'
import { Meta, Story } from '@storybook/react'
import useFormHook from './formHook'
import DynamicFormattedMessage from '../../components/common/ui/DynamicFormattedMessage'
import TextInput from './atoms/mui/TextInput'
import SelectInput from './atoms/mui/SelectInput'
import YesNoInput from './atoms/mui/YesNoInput'
import Checkbox from './atoms/mui/Checkbox'
import { SetupWrapper } from '../../SetupWrapper'

export default {
  title: 'Form/React-Hook',
  component: useFormHook as any,
} as Meta

const Example: FC = () => {
  const {
    form: { register, handleSubmit, errors, reset, watch },
    onSubmit,
    options,
  } = useFormHook()
  const watchDeveloper = watch('developer')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mt5">
        <DynamicFormattedMessage
          tag="span"
          id="reactHookFormExample"
          className="mb5 textCenter"
        />
        <div className="row">
          <TextInput
            name="name"
            id="firstName"
            register={register({ required: true, maxLength: 80 })}
            error={errors.name}
          />
          <TextInput
            name="lastName"
            id="lastName"
            register={register({ required: true, maxLength: 80 })}
            error={errors.lastName}
          />
          <TextInput
            name="email"
            id="email"
            register={register({
              required: true,
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'email',
              },
            })}
            error={errors.email}
          />
          <SelectInput
            name="title"
            id="title"
            register={register({ required: true })}
            options={options}
          />
          <YesNoInput
            name="developer"
            id="developer"
            register={register}
            error={errors.developer}
          />
          {watchDeveloper === 'Yes' && (
            <Checkbox
              name="human"
              id="human"
              register={register({ required: true })}
              error={errors.human}
            />
          )}
          <div className="col12 mt5 dFlex justifyContentCenter">
            <button className="btn btnPrimary">Save</button>
            <button
              type="button"
              className="btn btnDanger ml3"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
const Template: Story<any> = () => (
  <SetupWrapper>
    <Example />
  </SetupWrapper>
)

export const MUI = Template.bind({})
MUI.args = {}
