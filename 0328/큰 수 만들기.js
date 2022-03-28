function solution(number, k) {
    let stack = [];
    let count = 0;
    let answer = "";

    for(let num of number){
        while(count < k && stack[stack.length - 1] < num){
            stack.pop();
            count += 1;
        }
        stack.push(num);
    }

    if(count<k){
        answer = stack.slice(0,stack.length - k).join("");
    }else{
        answer = stack.join("");
    }

    return answer
}

// 입출력       예
// number	    k	return
// "1924"	    2	"94"
// "1231234"	3	"3234"
// "4177252841"	4	"775841"

number = "1924"
k = 2;
console.log(solution(number, k))
number = "1231234"
k = 3;
console.log(solution(number, k))
number = "4177252841"
k = 4;
console.log(solution(number, k))