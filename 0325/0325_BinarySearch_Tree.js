class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return;
        }

        let currNode = this.root;
        while(currNode !== null){
            if(currNode.value < value){
                if(currNode.right === null){
                    currNode.right = newNode;
                    break;
                }
                currNode = currNode.right;
            }else{
                if(currNode.left === null){
                    currNode.left = newNode;
                    break;
                }
                currNode = currNode.left;
            }
        }
    }

    has(value){
        let currNode = this.root;
        while(currNode !== null){
            if(currNode.value === value){
                return true
            }

            if(currNode.value < value){
                currNode = currNode.right;
            }else{
                currNode = currNode.left;
            }
        }
        return false
    }
}

const tree = new binarySearchTree();
tree.insert(5);
console.log(tree);
tree.insert(4);
console.log(tree);
tree.insert(7);
console.log(tree);
tree.insert(3);
console.log(tree.has(3));