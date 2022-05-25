// Counter 컴포넌트 기능
// 1. 증감 기능
// 2. 부모 컴포넌트에게 메시지 전달하는 기능
import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0); // 첫 번째 = 상태, 두 번째 = 상태를 업데이트 하기 위한 함수

  return (
    <div>
      <span style={{fontSize : 40}}>{count}</span>
      <br />
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default Counter;