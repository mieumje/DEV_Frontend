import Tab from "../components/Tab";
import Header from "../components/Header/Index";

export default {
  title: 'Component/Tab',
  component: Tab
};

export const Default = () => {
  return (
    <Tab>
      <Tab.Item title="Item 1" index="item 1">
        Content 1
      </Tab.Item>
      <Tab.Item title="Item 2" index="item 2">
        Content 2
      </Tab.Item>
      <Tab.Item title="Item 3" index="item 3">
        <Header>Header</Header>
      </Tab.Item>
    </Tab>
  );
};