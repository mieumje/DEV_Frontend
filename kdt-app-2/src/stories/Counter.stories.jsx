import React from 'react';

import Counter from '../components/Counter';

export default {
  title: 'Example/Counter',
  component: Counter,
  argTypes: { onIncrease: { action: 'increased'}} // Counter 컴포넌트에서 정의한 onIncreas 메서드
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Counter {...args} />;

export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'Button',
// };