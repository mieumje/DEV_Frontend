function solution(numbers) {
    let ans = "";
    let tmp = numbers.map(value => [Array(5).join(String(value)).slice(0,4),value]);
    tmp.sort((a,b) => b[0]-a[0]);
    let aa = tmp.map(value => {
        ans += value[1]
    })
    return ans
}

//numbers	            return
//[6, 10, 2]	        "6210"
//[3, 30, 34, 5, 9]	    "9534330"
numbers = [0,0,0]
console.log(solution(numbers));