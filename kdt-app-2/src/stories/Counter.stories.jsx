import React from 'react';

import Counter from '../components/Counter';

export default {
  title: 'Example/Counter',
  component: Counter,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Counter {...args} />;

export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'Button',
// };