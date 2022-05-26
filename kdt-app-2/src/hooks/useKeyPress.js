import { useCallback, useEffect, useState } from "react";

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const handlerKeyDown = useCallback(({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }, [targetKey]);

  const handlerKeyUp = useCallback(({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }, [targetKey]);

  useEffect(() => {
    window.addEventListener('keydown', handlerKeyDown);
    window.addEventListener('keyup', handlerKeyUp);

    return () => {
      window.removeEventListener('keydown', null);
      window.removeEventListener('keyup', null);
    }
  }, [handlerKeyDown, handlerKeyUp]);

  return keyPressed;
}

export default useKeyPress;