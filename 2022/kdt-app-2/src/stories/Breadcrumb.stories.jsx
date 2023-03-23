import Breadcrumb from "../components/Breadcrumb";

export default {
  title: 'Component/Breadcrumb',
  component: Breadcrumb
};

export const Default = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/level1">Level1</Breadcrumb.Item>
      <Breadcrumb.Item>Level2</Breadcrumb.Item>
    </Breadcrumb>
  );
};