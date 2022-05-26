import { useState } from 'react';

const Counter = ({ onIncrease }) => {
  const [count, setCount] = useState(0);

  const handlerIncrease = () => {
    setCount(count + 1);
    onIncrease(); // Storybook에서 log를 찍기 위한 메서드
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handlerIncrease}>+</button>
    </>
  )
};

export default Counter;