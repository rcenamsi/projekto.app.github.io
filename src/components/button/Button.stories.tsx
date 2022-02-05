import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SendIcon from '@mui/icons-material/Send';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'outlined',
  color: 'primary',
  label: 'Submit',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  variant: 'contained',
  label: 'Cancel',
  startIcon: <SendIcon />
};

export const Large = Template.bind({});
Large.args = {
  color: 'error',
  variant: 'text',
  size: 'large',
  label: 'Update',
  endIcon: <SendIcon />
};

export const Small = Template.bind({});
Small.args = {
  variant: undefined,
  color: 'success',
  size: 'small',
  label: 'Back',
};
