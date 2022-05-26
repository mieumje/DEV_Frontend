import { useMemo } from "react";

function sum(n) {
  console.log('Start');
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i;
  }

  console.log('Finished');
  return result;
}
const ShowSum = ({ label, n }) => {
  // const result = sum(n);
  const result = useMemo(() => sum(n), [n]) // 메모이제이션, 어떤 상태가 변경되었을 때 실행할 의존성 지정
  return(
    <span>
      {label} : {result}
    </span>
  )
}

export default ShowSum;