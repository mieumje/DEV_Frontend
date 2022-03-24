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
    insert(node, newValue){
        const newNode = new Node(newValue);
        //console.log(node,  "----------", newNode, "----------",node.next);
        newNode.next = node.next;
        node.next = newNode;
        this.size += 1;
    }
    remove(value){
        let prevNode = this.head;
        while(prevNode.next.value !== value){
            prevNode = prevNode.next;
        }

        if(prevNode.value === null){
            prevNode.next = prevNode.next.next;
        }
        this.size -= 1;
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
