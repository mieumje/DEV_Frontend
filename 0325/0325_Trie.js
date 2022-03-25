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
    insert(stringValue){
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
    
    has(stringValue){
        let currNode = this.root;
        for(let chr of stringValue){
            if(!currNode.children.has(chr)) return false
            currNode = currNode.children.get(chr);
        }
        
        return true
    }
}
const trie = new Trie();
trie.insert("cat");
trie.insert("cap");
console.log(trie.root.children.get('c').children);
console.log(trie.has("cat"));
console.log(trie.has("can"));