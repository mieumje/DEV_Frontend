function solution(n) {
    function checkZero(row,col,check){
        if(check[row-1][col-1] === 1 || check[row-1][col+1] === 1 || check[row+1][col+1] === 1 || check[row+1][col-1] === 1) return false

        return true
    }

    function search(check, row, col, n){
        let count = 0; // count = n > answer += 1

        check[row][col] = 1;
        for(let i=0; i<n; i++){
            check[row][i] = 1;
            check[i][col] = 1;
        }
        if (row - 1 >= 0 && col - 1 >= 0) check[row-1][col-1] = 1;
        if (row - 1 >= 0 && col + 1 < n) check[row-1][col+1] = 1;
        if (row + 1 < n && col + 1 < n) check[row+1][col+1] = 1;
        if (row + 1 < n && col - 1 >= 0) check[row+1][col-1] = 1;

        console.log(check, 1,2, check[1][2])
        for(let x=0; x<n; x++){
            for(let y=0; y<n; y++){
                if(check[x][y] === 0){
                    row = x;
                    col = y;
                    count += search(check, row, col, n)
                }
            }
        }

        return count
    }
    
    let check = Array.from(Array(n), () => Array.from({length : n}, () => 0));
    return search(check, 0, 0, n);
}

// n	result
// 4	2
let n = 4
console.log(solution(n));