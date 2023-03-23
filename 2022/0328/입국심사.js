function solution(n, times) {
    times.sort((a, b) => a - b);
    let left = 1; // 최소 시간
    let right = times[times.length - 1]* n; // 최대 시간
    

    while(left<=right){
        let mid = Math.floor((left + right) / 2);
        const sum = times.reduce((prev, curr) => prev + Math.floor(mid / curr), 0); // 누적 초기 값 = 0으로 초기화
        console.log(left, mid, right, sum)
        if(sum < n){    // mid 시간 동안 처리할 수 있는 인원이 n보다 작으면
            left = mid + 1; // mid 시간 이하는 모두 n명 이하만 처리 가능
        }else{    // mid 시간 동안 처리할 수 있는 인원이 n보다 크면
            right = mid - 1; // mid 시간 이상은 모두 n명 이상 처리 가능
        }
    }

    return left
}

// 입출력 예
// n	times	return
// 6	[7, 10]	28

let n = 6;
let times = [7, 10];
console.log(solution(n, times))