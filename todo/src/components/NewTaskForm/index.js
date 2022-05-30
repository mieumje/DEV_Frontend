import styled from "@emotion/styled";
import { useState } from "react";

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid black;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
`;

const NewTaskForm = (props) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Create Todo" 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        required/>
      <SubmitButton>Add</SubmitButton>
    </Form>
  );
}

export default NewTaskForm;