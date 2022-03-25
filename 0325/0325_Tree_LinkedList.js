class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(node){
        this.root = node;
    }
}

const tree = new Tree(new Node(3));
tree.root.left = new Node(5);
tree.root.right = new Node(10);
console.log(tree.root);