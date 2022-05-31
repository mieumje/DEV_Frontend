import Progress from "../components/Progress";

export default {
  title: 'Component/Progress',
  component: Progress
};

export const Default = () => {
  return (
    <div>
      <Progress value={30} />
    </div>
  );
};