import { useState } from "react";
import useIntervalFn from "../../hooks/useIntervalFn";

export default {
  title: 'Hooks/useIntervalFn'
};

export const Default = () => {
  const [array, setArray] = useState([]);
  const [run, clear] = useIntervalFn(() => {
    setArray([...array, '추가']);
  }, 1000);

  return (
    <>
      <div>useIntervalFn 테스트</div>
      <div>{array}</div>
      <button onClick={run}>1초마다 추가</button>
      <button onClick={clear}>실행 중지</button>
    </>
  );
};