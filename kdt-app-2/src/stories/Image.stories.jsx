import Image from "../components/Image";

export default {
  title: 'Component/Image',
  component: Image,
  argTypes: {
    src: {
      name: 'src',
      type: { name: 'string', require: true},
      defaultValue: 'https://picsum.photos/200/',
      control: { type: 'text' }
    },
    width: {
      name: 'width',
      defaultValue: 200,
      control: { type: 'range', min: 200, max: 600}
    },
    height: {
      name: 'height',
      defaultValue: 200,
      control: { type: 'range', min: 200, max: 600}
    },
    alt: {
      name: 'alt',
      control: { type: 'string' }
    },
    mode: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' }
    },
    block: {
      defaultValue: false,
      control: { type: 'boolean'}
    }
  }
};

export const Default = (args) => {
  return <Image {...args} />;
};