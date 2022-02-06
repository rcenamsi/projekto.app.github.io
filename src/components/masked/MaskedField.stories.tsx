import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MaskedInput } from './MaskedField';

export default {
  title: 'Component/MaskedInput',
  component: MaskedInput,
  argsTypes: {}
} as ComponentMeta<typeof MaskedInput>

const Template: ComponentStory<typeof MaskedInput> = (args) => <MaskedInput {...args} />

export const Masked = Template.bind({});
Masked.args = {
  id: 'password-field',
  label: 'Password',
  variant: 'outlined'
}