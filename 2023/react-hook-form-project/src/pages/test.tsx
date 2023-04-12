import styled from '@emotion/styled';
import { DatePicker } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  justify-content: center;
  align-items: center;
`;

function Test() {
  const navigate = useNavigate();
  const { RangePicker } = DatePicker;
  return (
    <Div>
      <DatePicker />
      <RangePicker />
      <Button type="primary" onClick={() => navigate('/')}>
        Home
      </Button>
    </Div>
  );
}

export default Test;
