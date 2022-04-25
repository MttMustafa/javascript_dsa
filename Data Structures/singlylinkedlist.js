class Node{
    constructor(node_value){
        this.value = node_value; //instances value
        this.next = null; //instances next value (next element in linked list)
    }

}

class SinglyLinkedList{
    constructor(){ //When we create a new singlylinkedlist instance we create a head, a tail and a length variable 
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){ //we will use push function for function for adding new elements from the end
        let newNode = new Node(val); //we create a new instance of Node class which create us a new node for linked list that contains a value and the next instance of the Node class
        if(!this.head) { //if this will we our first element head and tail will be this instance of Node...
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; //...otherwise we set the last node's next element (which we use next variable to point) as the new node
            this.tail = newNode; //and we assign the newnode as the new last element (tail)
        }
        ++this.length; //we increase the length
        return this; //we return the list
    }
    pop(){ //In order the pop the last element we need to loop through the links from the begining and exclude the last Node.
        if(!this.head) return undefined; // If the list is empty we return undefined
        let current = this.head; //We set a pointer call current this will point our next value
        let newTail = current; //We set another pointer this will follow current pointer one Node behind
        while(current.next) { //while the current value has a node comes after it (not the last value)
            newTail = current; //newtail is the current value (cause its not the last value)
            current = current.next; //new current is the next Node
        }//it goes over again until current variable assigned to a null value (last value) and newTail the value comes before it
        this.tail = newTail; //we set the new tail
        this.tail.next = null; //
        --this.length; //cause well we did exclude and remove the last(by setting new tails next value null) the last one
        if(this.length === 0){ //If there is one Node in the list loop wont work(cause there is no next element) and we will end up with the same list without any 'popping' ...
            this.head = null;//so we need to set the head ant tail to null manually.
            this.tail = null;
        }
        return current; //we return the popped value
    }
    shift(){
        if(!this.head) return undefined; //if list is empty
        let currentHead = this.head; //get the current head
        this.head = currentHead.next; //set the next node new head (will be null if there is only one Node)
        currentHead.next = null;
        --this.length; //decrease length val of the arr
        if(this.length === 0){
            this.tail = null;
        } 
        return currentHead; // return the shifted value
    }
    unshift(val){
        let newNode = new Node(val); //create a new node
        if(!this.head){ //if the list is empty
            this.head = newNode; //set the head new node
            this.tail = this.head; //set the tail the new node (cause there is only one element)
        } else {
            newNode.next = this.head; //set the newNodes next element current head
            this.head = newNode; //newNode is the new head
        }
        ++this.length; //increase the length val
        return this; //return the list
    }
    get(index){
        if(index < 0 || index >= this.length) return null; //if index defined beyond list boundaries return null
        let current = this.head; //set current values as lists head
        let counter = 0; //counter 
        while(counter < index){ 
            current = current.next; //set the current value the next value...
            ++counter;
        }//...until we get the index point
        return current; //return the node
    }
    set(index,val){
        let setNode = this.get(index); //call the get function to get the node at the index
        if(setNode){
            setNode.value = val; //change the nodes value 
            return true; // return true
        }
        return false; //return false otherwise
    }
    insert(index,val){ 
        if(index < 0 || index > this.length) return false; //if index defined beyond list boundaries return false
        if(index === 0) return !!this.unshift(val); //if index is 0 call the unshift function the insert and return true
        if(index === this.length) return !!this.push(val); //if index equals to length call the push function the insert and return true
        let prev = this.get(index - 1); //if index in between get the node before the insertion index
        let restOfList = prev.next; //get the rest of the list as the resOfList
        let newNode = new Node(val); //create the new node with the val
        prev.next = newNode; //link the new node next to prev
        newNode.next = restOfList; //link the rest of the list next to newnode
        ++this.length; //increase the length
        return true; // return true
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined; //if index defined beyond list boundaries return undefined
        if(index === 0) return this.shift(); //if index is zero call the shift and return the shifted value
        if(index === this.length - 1) return this.pop(val); //if index is the last element call the pop function and return the removed value
        let prev = this.get(index - 1); //otherwise.. get the index before the wanted index
        let removedNode = prev.next; //get the node after the prev value (which is the node we want the remove)
        prev.next = removedNode.next; //link the prev node the node comes after the node we want the remove
        --this.length; //decrease the length
        return removedNode; //return removed node
    }
    reverse(){ //This function reverses a linked list 
        let currentNode = this.head; //Node that we currently pointing
        this.head = this.tail; //We swap the head and tail pointers places
        this.tail = currentNode;
        let nextNode; //Node that comes after current node before the reversing
        let prevNode = null; //Node that comes before the current node before the reversing
        for(let i = 0; i < this.length; ++i){ 
            //in this loop we traverse the whole list from the begining and set the next value previous value so we can end up with a reversed list.
            //because there is no prev value in singly linked list we use the current value of the last loop (with prevNode variable) 
            nextNode = currentNode.next; //we point our next node as the node that comes after current node (as it is)
            currentNode.next = prevNode; //we set the current nodes next node variable the node comes before it
            prevNode = currentNode; //for the next loop we set our new prevnode our current node
            currentNode = nextNode; //again for the next loop we use our nextnode definition and we set the current node the nextnode
        }
    }
}

let list = new SinglyLinkedList();
for(let i = 0 ; i < 10 ; ++i){
    list.push(i);
}

console.log(list.pop())

// console.log(list.pop());
// console.log(list);