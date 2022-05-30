import styled from "@emotion/styled";
import Header from "./components/Header/index.js";
import NewTaskForm from "./components/NewTaskForm/index.js";
import TaskList from "./components/TaskList/index.js";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Header>Todo</Header>
      <NewTaskForm />
      <TaskList style={{ marginTop : 16}}/>
    </Container>
  );
}

export default App;
