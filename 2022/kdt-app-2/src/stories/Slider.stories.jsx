import Slider from "../components/Slider";

export default {
  title: 'Component/Slider',
  component: Slider,
  argTypes: {
    defaultValue: { defaultValue: 1, control: 'number' },
    min: { defaultValue: 0, control: 'number' },
    max: { defaultValue: 100, control: 'number' },
    step: { defaultValue: 0.1, control: 'number' },
    onChange: { action: 'onChange' }
  }
};

export const Default = (args) => {
  return <Slider {...args}></Slider>
}