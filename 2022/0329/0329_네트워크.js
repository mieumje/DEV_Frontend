function solution(n, computers) {
    let answer = 0;
    let check = Array.from({length : n}, () => false);

    for(let i=0; i<n; i++){
        if(!check[i]){
            dfs(i, n, computers, check);
            answer += 1;
        }
    }

    function dfs(startComputerNumber, n, computers, check){
        const stack = [startComputerNumber];

        while(stack.length > 0){
            const currComputerNumber = stack.pop();
            check[currComputerNumber] = true;

            for(let i=0; i<n; i++){
                if(!check[i] && computers[currComputerNumber][i]){
                    stack.push(i);
                }
            }
        }
    }
    return answer
}
// n	computers	                        return
// 3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	2
// 3	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]	1

let n = 3;
let computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]];
console.log(solution(n, computers));