class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{ //Works exactly like singly linked list but it can only shift and unshift. 
    constructor(){
        this.top = null; //Top of the stack (first element of the list)
        this.bottom = null; //Bottom of the stack (last element)
        this.size = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(this.size === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else{
            newNode.next = this.top;
            this.top = newNode;
        }
        return ++this.size;
    }
    pop(){
        let removed = this.top;
        if(this.size === 0) return null;
        if(this.size === 1){
            this.top = null;
            this.bottom = null;
        } else this.top = this.top.next;
        --this.size;
        return removed;
    }
}