import Task from "../components/Task";

export default {
  title: 'Components/Task',
  component: Task
}

export const Default = () => {
  return (
    <Task id="123" content="Todo" complete />
  )
}