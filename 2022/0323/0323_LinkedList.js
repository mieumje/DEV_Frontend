class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    find(value){
        let currNode = this.head;
        while(currNode.value !== value){
            currNode = currNode.next;
        }
        return currNode
    }

    append(newValue){
        const newNode = new Node(newValue);
        let currNode;
        if(this.head === null){
            this.head = newNode;
        }else{
            currNode = this.head;
            while(currNode.next){
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
        this.size += 1;
    }
    insert(index, newValue){
        if(index < 0 || index > this.size) {
            return console.log("Invalid Index");
        }
        const newNode = new Node(newValue);
        let currNode, prevNode;
        
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            currNode = this.head;
            let idx = 0;
            while(idx<index){
                idx += 1;
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = newNode;
            newNode.next = currNode;
        }
        this.size += 1;
        // const newNode = new Node(newValue);
        // //console.log(node,  "----------", newNode, "----------",node.next);
        // newNode.next = node.next;
        // node.next = newNode;
        // this.size += 1;
    }
    removeIndex(index){
        if(index < 0 || index > this.size){
            return console.log("Invalid Index");
        }
        let currNode = this.head;
        let prevNode;
        if(index === 0){
            this.head = currNode.next;
        }else{
            let idx = 0;
            while(idx<index){
                idx += 1;
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = currNode.next;
        }
        this.size -= 1;

        return currNode.value

        // let prevNode = this.head;
        // while(prevNode.next.value !== value){
        //     prevNode = prevNode.next;
        // }

        // if(prevNode.value === null){
        //     prevNode.next = prevNode.next.next;
        // }
        // this.size -= 1;
    }

    display(){
        let currNode = this.head;
        let displayString = "[";
        while(currNode !== null){
            displayString += `${currNode.value}, `;
            currNode = currNode.next;
        }
        displayString = displayString.substring(0, displayString.length - 2);
        displayString += "]";
        console.log(displayString);
    }
}

const linkedList = new SinglyLinkedList();

linkedList.append(1);
linkedList.display();
linkedList.append(5);
linkedList.display();
console.log(linkedList)
linkedList.append(8);
linkedList.display();
console.log(linkedList)
linkedList.insert(1,10);
linkedList.display();
console.log(linkedList);
console.log(linkedList.removeIndex(2));
linkedList.display();
console.log(linkedList)