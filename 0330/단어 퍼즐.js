function solution(strs, t) {
    let answer = 0;
    let l = t.length;
    const dp = Array.from({length : l + 1}, ()=> 0);
    let strsSet = new Set(strs);

    for(let i=1; i<l + 1; i++){
        dp[i] = 20000;
        // console.log(t.slice(0,i)) // 현재 만들 단어
        for(let j=1; j<Math.min(i + 1, 6); j++){
            const start = i - j, end = i;
            // console.log(t.slice(start, end))    // 확인 할 단어
            if(strsSet.has(t.slice(start, end))){
                dp[i] = Math.min(dp[i], dp[start] + 1);
            }
            // console.log(dp)
        }
    }

    answer = dp[l] !== 20000 ? dp[l] : -1

    return answer;
}

// 입출력 예
// strs	                                t	        result
// ["ba","na","n","a"]	                "banana"	3
// ["app","ap","p","l","e","ple","pp"]	"apple"	    2
// ["ba","an","nan","ban","n"]	        "banana"	-1
let strs = ["ba","an","nan","ban","n"];
let t = "banana";
console.log(solution(strs,t))
console.log(t.slice(0,6))