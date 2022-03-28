function solution(tickets) {
    let answer = [];
    let dict = {};
    for(const ticket of tickets){
        if(dict[ticket[0]]) dict[ticket[0]].push(ticket[1])
        else dict[ticket[0]] = [ticket[1]]
    }
    
    for(let key in dict){
        dict[key].sort().reverse();
    }
    
    let stack = ["ICN"];
    
    while(stack.length > 0){
        let from = stack[stack.length - 1];

        if(dict[from] == undefined){
            answer.push(stack.pop());
        } else if(dict[from].length > 0) {
            stack.push(dict[from].pop());
        } else answer.push(stack.pop());
    }

    return answer.reverse()
}

// 입출력 예
// tickets	                                                                        return
// [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]	                                ["ICN", "JFK", "HND", "IAD"]
// [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

// tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]];
// console.log(solution(tickets));
tickets = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]];
console.log(solution(tickets));

// 입출력 예 설명
// 예제 #1

// ["ICN", "JFK", "HND", "IAD"] 순으로 방문할 수 있습니다.

// 예제 #2

// ["ICN", "SFO", "ATL", "ICN", "ATL", "SFO"] 순으로 방문할 수도 있지만 ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"] 가 알파벳 순으로 앞섭니다.