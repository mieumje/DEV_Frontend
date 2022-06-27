import styled from "@emotion/styled";
// import { useTask } from "../context/TaskProvider";
import { useSelector } from 'react-redux';
import { RootState } from "../redux";
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

function TaskList(props: any) {
  // const { tasks } = useTask();
  const tasks = useSelector((store: RootState) => store.tasks);
  return (
    <UnorderedList>
      {
        tasks.map(item => (
          <Task 
            {...props}
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