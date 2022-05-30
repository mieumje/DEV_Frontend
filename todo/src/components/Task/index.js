import styled from '@emotion/styled';
import Toggle from "../Toggle/index.js";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 0 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  list-style: none;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  width: 64px;
  height: 24px;
  margin-left: 8px;
  color: white;
  background-color: red;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Task = ({ content, complete, ...props}) => {
  return (
    <ListItem {...props}>
      <Toggle on={complete}/>
      <Content>{content}</Content>
      <RemoveButton>삭제</RemoveButton>
    </ListItem>
  )
};

export default Task;