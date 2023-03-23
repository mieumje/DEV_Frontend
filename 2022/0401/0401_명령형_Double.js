// 예시 1-1
// double 함수 만들기
// double([1,2,3]) => [2,4,6]
function double(arr) { // 명령형
  let reulst = [];
  for (let i = 0; i < arr.length; i++) {
    reulst.push(arr[i] * 2);
  }
  return reulst;
}

console.log(double([1,2,3]));
