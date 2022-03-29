function solution(n) {
    let answer = 0;
    let column = Array.from({length : n + 1}, () => 0);
    dfs(column, 1);
    
    
    function isValidPoint(column, row){
        for(let i=1; i<row; i++){
            if(column[row] === column[i]) return false
            if(Math.abs(row - i) === Math.abs(column[row] - column[i])) return false // 행의 차 === 열의 차
        }
        return true
    }

    function dfs(column, row){
        if(row === n) {
            console.log(column)
            return answer++
        }
        
        for(let col=1; col<=n; col++){
            column[row] = col;

            if(isValidPoint(column, row)){
                dfs(column, row + 1, n);
            }
        }
    }

    return answer
}

// n	result
// 4	2
let n = 4
console.log(solution(n));