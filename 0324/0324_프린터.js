function solution(priorities, location) {
    let answer = 0;

    let l = priorities.length;

    while(priorities){
        if(location === 0){
            if(priorities[0] < Math.max(...priorities)){
                let tmp = priorities.slice(0,1);
                priorities.push(tmp);
                priorities.splice(0,1);
                location = l - 1;
            }else{
                return answer += 1
            }
        }else{
            if(priorities[0] < Math.max(...priorities)){
                let tmp = priorities.slice(0,1);
                priorities.push(tmp);
                priorities.splice(0,1);
                location -= 1;
            }else{
                priorities.splice(0,1);
                location -= 1;
                answer += 1;
            }
        }
    }
    
    return answer;
}

// priorities	        location	return
// [2, 1, 3, 2]	        2	        1
// [1, 1, 9, 1, 1, 1]	0	        5


let priorities = [2, 1, 3, 2];
let location = 2;
console.log(solution(priorities, location))