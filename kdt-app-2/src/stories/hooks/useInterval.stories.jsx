import { useState } from "react";
import useInterval from "../../hooks/useInterval";

export default {
  title: 'Hooks/useInterval'
};

export const Default = () => {
  const [array, setArray] = useState([]);
  const clear = useInterval(() => {
    setArray([...array, '추가']);
  }, 1000);

  return (
    <>
      {array}
      <button onClick={clear}>실행 중지</button>
    </>
  );
};