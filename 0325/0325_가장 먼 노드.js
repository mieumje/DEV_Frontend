function solution(n, edge) {
    let answer;
    let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
    
    for(let [node1,node2] of edge){
        graph[node1][node2] = 1;
        graph[node2][node1] = 1;
    }
    
    let check = Array.from(Array(n+1), () => 0);
    check[1] = 1;
    let queue = [];
    queue.push(1);
    
    while(queue.length > 0){
        let startNode = queue.shift();
        for(let i=1; i<=6; i++){
            if(graph[startNode][i] && check[i]===0){
                check[i] = check[startNode] + 1;
                queue.push(i);
            }
        }
    }
    
    let max = Math.max(...check);
    
    answer = check.filter(value => value === max);
    return answer.length;
}

// n	vertex	                                                    return
// 6	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	3


let n = 6;
let vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
console.log(solution(n,vertex));