import { useState, useRef } from "react"

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const intervalId = useRef(); // 지역 변수로 사용할 intervalId

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setCount(count => count + 1);
      console.log(intervalId.current)
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default AutoCounter;