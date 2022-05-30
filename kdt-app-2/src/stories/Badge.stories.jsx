import Badge from "../components/Badge";
import Image from '../components/Image';

export default {
  title: 'Component/Badge',
  component: Badge,
  argTypes: {
    count: { defaultValue: 10, control: "number"},
    maxCount: { defaultValue: 100, control: "number"}
  }
};

export const Default = (args) => {
  return (
    <Badge {...args}>
      <Image 
        src="https://picsum.photos/60" 
        width={60} 
        style={{ borderRadius: 8}} />
    </Badge>
  );
};