class Node{
    constructor(value = ""){
        this.value = value;
        this.children = new Map();
    }
}
let a = new Node();
a.children.set('c', new Node(a.value + 'c'));
console.log(a);

let b = a.children.get('c');
b.children.set('a', new Node(b.value + 'a'));
console.log(b);