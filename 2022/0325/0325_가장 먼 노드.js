function solution(n, edge) {
    let answer;
    let graph = Array.from(Array(n+1), () => []);
    
    for(let [node1, node2] of edge){    // 인접 리스트로 그래프 표현
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    
    let check = Array.from({length : n+1}, () => 0);
    check[1] = 1; // 1번 노드부터 각 노드의 최단 경로를 찾기 위해 1번 시작 위치를 1로 초기화, 각 노드의 거리는 이전 노드의 거리 + 1
    let queue = [];
    queue.push(1); // 1번 노드 부터 시작
    
    while(queue.length > 0){
        let startNode = queue.shift();
        for(let endNode of graph[startNode]){
            if(check[endNode] === 0) {
                check[endNode] = check[startNode] + 1;
                queue.push(endNode);
            }
        }
    }
    
    let max = Math.max(...check);
    
    answer = check.filter(value => value === max);
    return answer.length
}

// n	vertex	                                                    return
// 6	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	3


let n = 6;
let vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
console.log(solution(n,vertex));