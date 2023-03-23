class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value)   // 마지막 정점에 값 추가
        let currIndex = this.heap.length - 1;   // 값이 추가된 정점의 현재 index
        let parentIndex = Math.floor(currIndex / 2);    // 추가된 값의 부모 index

        while (parentIndex !== 0 && this.heap[parentIndex] < value) { // 부모 index가 1일 때까지(Root 노드일 때까지) && 부모 노드의 값이 추가된 값보다 작을 때까지
            const tmp = this.heap[parentIndex];
            this.heap[parentIndex] = value; // 부모 노드와 추가된 노드의 값 교체
            this.heap[currIndex] = tmp;     // 부모 노드와 추가된 노드의 값 교체

            currIndex = parentIndex;        // 교체 된 자리(부모)로 현재 index 이동
            parentIndex = Math.floor(currIndex / 2); // 교최 된 자리(부모)의 부모 index
        }
    }

    pop() {
        if(this.isEmpty()){
            return console.error("Heap is empty");
        }

        const returnValue = this.heap[1];
        if (this.heap.length === 2) return this.heap.pop();
        this.heap[1] = this.heap.pop();

        let currIndex = 1, leftIndex = 2, rightIndex = 3;

        while (
            this.heap[leftIndex] > this.heap[currIndex] || this.heap[rightIndex] > this.heap[currIndex]
        ) {
            if (this.heap[rightIndex] > this.heap[leftIndex]) {
                const tmp = this.heap[currIndex];
                this.heap[currIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = tmp;
                currIndex = rightIndex;
            } else {
                const tmp = this.heap[currIndex];
                this.heap[currIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = tmp;
                currIndex = leftIndex;
            }
            leftIndex = currIndex * 2;
            rightIndex = (currIndex * 2) + 1;
        }
        return returnValue
    }

    isEmpty() {
        if (this.heap.length === 1) {
            return true
        }
    }
}

const heap = new MaxHeap();
heap.push(1);
console.log(heap.heap);
heap.push(3);
console.log(heap.heap);
heap.push(64);
heap.push(15);
console.log(heap.heap);
heap.push(27);
console.log(heap.heap);
heap.push(32);
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop(), heap);
console.log(heap.pop(), heap);
console.log(heap.pop(), heap);


