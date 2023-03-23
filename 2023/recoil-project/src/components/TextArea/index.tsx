import styled from '@emotion/styled';
import { charState, textState } from '@store/index';
import { useRecoilState, useRecoilValue } from 'recoil';

const Div = styled.div`
  text-align: center;
  width: fit-content;
  font-weight: 700;
`;

function TextArea() {
  const [text] = useRecoilState(textState);
  const length = useRecoilValue(charState);
  return (
    <Div>
      {text && (
        <span>
          {text}'s length is {length}
        </span>
      )}
    </Div>
  );
}

export default TextArea;
