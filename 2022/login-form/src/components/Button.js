import styled from "@emotion/styled"

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  color: white;
  background-color: skyblue;
  border: none;
  border-radius: 4;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #28aee2;
  }

  &:active {
    background-color: #18b4f2;
  }

  &:disabled {
    background-color: red;
  }
`

export default Button;