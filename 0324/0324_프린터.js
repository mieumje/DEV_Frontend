class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(newValue){
        const newNode = new Node(newValue);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        return value
    }

    peek(){
        return this.head.value
    }
}
function solution(priorities, location) {
    let answer = 0;
    const queue = new Queue();
    for(let i=0; i<priorities.length; i++){
        queue.enqueue([priorities[i], i]);
    }

    priorities.sort((a,b) => b-a);

    while(true){
        const curr = queue.peek();
        if(curr[0] < priorities[answer]){
            queue.enqueue(queue.dequeue());
        }else{
            const value = queue.dequeue();
            answer += 1;
            if(location === value[1]) return answer
        }
    }

}

// priorities	        location	return
// [2, 1, 3, 2]	        2	        1
// [1, 1, 9, 1, 1, 1]	0	        5


let priorities = [1, 1, 9, 1, 1, 1];
let location = 5;
console.log(solution(priorities, location))