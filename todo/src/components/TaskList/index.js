import styled from '@emotion/styled';
import { useTasks } from '../../context/TaskProvider.js';
import Task from "../Task/index.js";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const TaskList = (props) => {
  const { tasks } = useTasks();

  return (
    <UnorderedList {...props}>
      {
        tasks.map(item => (
          <Task
            key={item.id}
            id={item.id}
            content={item.content}
            complete={item.complete}
          />
        ))
      }
    </UnorderedList>
  )
};

export default TaskList;