import React, { useEffect } from 'react';

const Input = React.forwardRef((_, ref) => {  // 첫 번째 = props, 두 번째 = ref
  useEffect(() => {
    console.log(ref.current)
  }, [ref]);
  
  return (
    <>
    Input : <input ref={ref} />
    </>
  )
})

export default Input;