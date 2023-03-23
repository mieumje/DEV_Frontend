import Task from "../components/Task/index.js";

export default {
  title: 'Component/Task',
  component: Task
};

export const Default = (args) => {
  const task = {
    content: '강의듣기',
    complete: false
  };
  return <Task {...args} content={task.content} complete={task.complete}/>;
};