import styled from '@emotion/styled';
import { textState } from '@store/index';
import { useRecoilState } from 'recoil';

const StyledInput = styled.input`
  border: 1px solid #4d4d4d;
  width: 150px;
  height: 30px;
  padding: 2px;
`;

function Input() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;
    setText(value);
  };

  return <StyledInput value={text} onChange={onChange} />;
}

export default Input;
