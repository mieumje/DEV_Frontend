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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);

console.log(queue);
console.log(queue.dequeue());
console.log(queue);

queue.enqueue(8);
console.log(queue);
console.log(queue.dequeue());