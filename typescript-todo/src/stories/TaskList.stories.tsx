import TaskList from "../components/TaskList";
import TaskProvider from "../context/TaskProvider";

export default {
  title: 'Components/TaskList',
  component: TaskList
}

export const Default = () => {
  const tasks = [
    {
      id: '123',
      content: 'Todo 1',
      complete: false,
    },
    {
      id: '124',
      content: 'Todo 2',
      complete: false,
    },
    {
      id: '125',
      content: 'Todo 3',
      complete: true,
    }
  ]
  return (
    <TaskProvider initialTasks={tasks}>
      <TaskList />
    </TaskProvider>
  );
};