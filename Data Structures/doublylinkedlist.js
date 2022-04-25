class Node{
    constructor(val){ //creates a new node in a new instance
        this.val = val; //value of the node
        this.next = null; //next node
        this.prev = null; //previous node
    }
 }


 class DoublyLinkedList{
    constructor(){ //creates a new dll on a new instance
        this.head = null; //first element (head) of the list
        this.tail = null; //last element (tail) of the list
        this.length = 0; //lentgth of the list
    }
    push(val){ //pushes a new node to the end of the list
        let newNode = new Node(val);
        if(!this.head){ //if there is no head in the list (which makes no node in the list) 
            this.head = newNode; //head is the new node
            this.tail = newNode; //tail is the new node
        }
        else{ //otherwise
            this.tail.next = newNode; //make the next node of the current tail new node
            newNode.prev = this.tail; //make the prev node of the newnode current tail
            this.tail = newNode; //new tail is newnode
       }
       ++this.length; //increase the length
       return this; //return list
    }
    pop(){
        let oldTail = this.tail; //oldTail is the current tail
        if(!this.head) return undefined; //if there is no node in list return undefined
        if(this.length === 1){ //if there is only one element set head and tail null
            this.head = null;
            this.tail = null;
        } else{ //otherwise
            let newTail = oldTail.prev; //set the new tail previous node of the current tail
            newTail.next = null; //set the next of the prev node null
            oldTail.prev = null; //set the prev node of the old tail null
            this.tail = newTail; //new tail is now the previous tail of the old tail
        }
        --this.length; //decrase the length
        return oldTail; //return the oldtali (popped node)
        /*you might notice that changes in the nodes assign to the newTail and oldTail also apply to these variables outputs this happens because,
        when we say oldTail = this.tail we dont make a copy of the this.tail for the assignment. we give a reference of the object the the variable oldTail
        so if we make a change in the node referenced by the old tail after assignment this changes the output of the oldTail aswell!
        cause well... its a reference to the object and abolutely NOT A COPY.*/
    }
    shift(){
        let oldHead = this.head; //current head is oldhead
        if(!this.head) return undefined; //if list is empty return undefined
        if(this.length === 1){ //if list length is 1
            this.head = null; //self explanatory
            this.tail = null;
        } else{  //otherwise
            let newHead = this.head.next; //newhead is the next node of the current head
            this.head = newHead; //head is now newhead
            oldHead.next = null;
            newHead.prev = null; //due to reference copying this can change the prev value in this.head object after newHead definition
        }
        --this.length;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val); //create a new node
        if(!this.head){ //if there is no node in list
            this.head = newNode;
            this.tail= newNode;
        } else{ //otherwise
            newNode.next = this.head; //newnodes next element is the head
            this.head.prev = newNode; //heads prev element is newnode
            this.head = newNode; //head is now the newhead
        }
        ++this.length;
        return this;
    }
    get(index){
        if(index < 0 || index > this.length) return null; //if index is out of boundaries
        if(index <= this.length/2){ //if index in the first half
           let current = this.head; //start from the head
           for(let i = 0; i < index; ++i){ //increment in every loop until i hits the index value
               current = current.next; //current is the next node so when i = index - 1 current will be the indexed node
           }
           return current; //return the current node
        } 
        else if(index > this.length/2){ //if index is in the second halp 
           let current = this.tail; //start from the tail
           for(let i = this.length - 1; i > index; --i){ //decrement until i hits the index number
               current = current.prev; //current is the prev node
           }
           return current; //return the current node
        }
    }
    set(index,val){
        let targetNode = this.get(index); //to get the wanted node call the get function
        if(!targetNode) return false; //in case target null is null return false
        targetNode.val = val; //set value in the target node to given value
        return true; //return true
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false; //if index is out of boundaries return false
        if(index === 0) return !!this.unshift(val); //if index is 0 unshift and return true
        if(index === this.length) return !!this.push(val); //if index equals to length push and return true
        let newNode = new Node(val); //create a new node
        let prevNode = this.get(index - 1); //get prev node of given index
        prevNode.next.prev = newNode; //set the next node of the prev node's prev value newNode (cause newnode will should before it)
        newNode.next = prevNode.next; //set the next value of the newNode next value of the prev node
        prevNode.next = newNode; //set next value of the of the prevNode nextNode (cause newNode should come after it)
        newNode.prev = prevNode; //set new node's prev value prevNode
        ++this.length;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return false; //if aout of boudaries return false
        if(index === 0) return this.shift(); //if index is zero shift it
        if(index === this.length - 1) return this.pop(); //if index is the last element pop it
        let removedNode = this.get(index); //get the node in the given index
        removedNode.prev.next = removedNode.next; //set the prev node from removednode's next value the node comes after removednode
        removedNode.next.prev = removedNode.prev; //set the next node from removednode's prev value the node comes before removednode
        removedNode.next = null; //self explanatory 
        removedNode.prev = null;
        --this.length;
        return removedNode;
    }
    reverse(){
        let currentNode = this.head; //currentNode initial value is the first element
        this.head = this.tail; //swap the head and tail placement
        this.tail = currentNode;
        for(let i = 0; i < this.length; ++i){ //this loop traverses the whole list from the begining and swa
            let nextNode = currentNode.next; //get the next value of the currentnode and save it
            currentNode.next = currentNode.prev; //swap the currentNode's next and prev values
            currentNode.prev = nextNode;
            currentNode = nextNode; //next currentnode will be the next node 
        }
        return this;
    }
 }

 let dl = new DoublyLinkedList();

 for(let i = 0 ; i < 10 ; ++i){
     dl.push(i);
 }


console.log(dl.reverse())