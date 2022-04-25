class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;  
    }
    enqueue(value){ //its just push from singly linked list
        let newNode = new Node(value);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){ //its just shift from singly linked list
        let oldFirst = this.first;
        if(!this.first) return null;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = oldFirst.next;
            oldFirst.next = null;
        }
        --this.size;
        return oldFirst;
    }
}