import Slider from "../components/Slider";

export default {
  title: 'Component/Slider',
  component: Slider
};

export const Default = (args) => {
  return <Slider {...args}></Slider>
}