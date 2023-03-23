class Queue{
    constructor(){
        this.Queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value){
        this.Queue[this.rear++] = value;
    }

    dequeue(){
        const value = this.Queue[this.front];
        delete this.Queue[this.front];
        this.front += 1;
        return value
    }

    peek(){ // Front에 위치한 값
        return this.Queue[this.front];
    }

    size(){
        return this.rear - this.front
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);

console.log(queue.dequeue());
console.log(queue);
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());

// Front, Rear가 무한정 커질 수 있음