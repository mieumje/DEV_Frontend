import { useCallback, useEffect, useState, useRef } from 'react';

const useHover = () => {
  const [state, setState] = useState(false);
  const ref = useRef(null);

  const handlerMouseOver = useCallback(() => setState(true), []);
  const handlerMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mouseover', handlerMouseOver)
      element.addEventListener('mouseout', handlerMouseOut)

      return () => {
        element.removeEventListener('mouseover', null);
        element.removeEventListener('mouseout', null);
      };
    }
  }, [ref, handlerMouseOver, handlerMouseOut]);

  return [ref, state];
}

export default useHover;