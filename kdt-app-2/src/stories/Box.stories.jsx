import React from 'react';

import Box from '../components/Box';

export default {
  title: 'Example/Box',
  component: Box,
  
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // }, prop을 넘기고 있지 않아 주석 처리
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Box {...args} />;

export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'Button',
// };