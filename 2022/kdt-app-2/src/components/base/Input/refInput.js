import React, { forwardRef, useImperativeHandle, useRef } from "react";

const RefInput = forwardRef((_, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return (
    <>
      Input : <input ref={inputRef}/>
    </>
  )
})

export default RefInput;