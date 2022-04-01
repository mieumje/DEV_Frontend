// 예시 1-1
// double 함수 만들기
// double([1,2,3]) => [2,4,6]
function double(arr) { // 명령형
    // return arr.map(function(x) {return x * 2})
    // return arr.map((value) => { return value * 2})
    return arr.map(value => value * 2)
}
  
console.log(double([1,2,3]));