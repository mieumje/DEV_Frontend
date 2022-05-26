// 이벤트 발생 시, true/false로 상태를 변경
import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  
  // useCallback을 통해 함수가 실행되더라도
  // 함수가 재정의 되지않게 한다.
  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle];
}

export default useToggle;