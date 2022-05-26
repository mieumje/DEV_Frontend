import React from 'react';

import Circle from '../components/Circle';

export default {
  title: 'Example/Circle',
  component: Circle,
  
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Circle {...args} />;

export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'Button',
// };