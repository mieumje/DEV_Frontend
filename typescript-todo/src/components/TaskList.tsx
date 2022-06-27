import styled from "@emotion/styled";
import { useTask } from "../context/TaskProvider";
import Task from "./Task";

const UnorderedList = styled.div`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`

function TaskList() {
  const { tasks } = useTask();
  return (
    <UnorderedList>
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
}

export default TaskList;