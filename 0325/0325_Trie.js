class Node{
    constructor(value = ""){
        this.value = value;
        this.children = new Map();
    }
}
class Trie{
    constructor(){
        this.root = new Node(); // Root 노드는 empty 상태로
    }
    isert(stringValue){
        let currNode = this.root;
        for(let chr of stringValue){
            if(!currNode.children.has(chr)){
                currNode.children.set(
                    chr,
                    new Node(currNode.value + chr)
                );
            }
            currNode = currNode.children.get(chr);
        }
    }
}