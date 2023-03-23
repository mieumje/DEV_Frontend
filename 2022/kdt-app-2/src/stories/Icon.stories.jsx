import Icon from "../components/Icon";

export default {
  title: 'Component/Icon',
  component: Icon,
  argTypes: {
    name: { defaultValue: "airplay", control: "text"},
    size: { defaultValue: 16, control : { type: 'range', min: 16, max: 80 }},
    rotate: { defaultValue: 0, control : { type: 'range', min: 0, max: 360 }},
    strokeWidth: { defaultValue: 2, control: { type: 'range', min: 2, max: 6}},
    color: { defaultValue: '#222', control: 'color'}
  }
};

export const Default = (args) => {
  return <Icon {...args} />;
};