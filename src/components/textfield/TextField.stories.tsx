import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './TextField';

export default {
  title: 'Component/TextField',
  component: TextField,
  argTypes: {
    
  }
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const Primary = Template.bind({});
Primary.args = {
  label: 'Text field (optional)',
  helperText: 'Input some text'
}

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Notes',
  helperText: 'Input some text',
  multiline: true,
  rows: 4
}