class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//In a binary search tree every'nodes has maximum number of child of 2
//And in every node childs with bigger values than node on the nodes right side and childs with smaller values on the left.
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){ //inserts new values to bst
        let newNode = new Node(value);
        if(this.root === null){ //if tree is empty new value is the root
            this.root = newNode;
            return this;
        }
        let current = this.root; //start from the root
        while(true){
            if(value === current.value) return undefined; //if value already exist in the tree
            if(value > current.value){ //if value is greater that the current node
                if(!current.right){ //if there is no right node right node is the value
                    current.right = newNode;
                    return this;
                }
                current = current.right; //if there is right value new current node is that node (loop will proceed searching the right place from this node)
            }
            else{ //same but for smaller values
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
        }
    }
    find(value){ //for finding values
        if(!this.root) return undefined; //if there is no nodes 
        let current = this.root; // start from the root
        while(true){
            if(value === current.value) return current; //if we found the value return it
            if(value < current.value){ //if value smaller than the nodes
                if(!current.left) return undefined; //if there is no left return undefind (cause that would mean the value doesnt exit in the tree)
                current = current.left; //if there is a value on the left new current is that value
            } else{ //same but for bigger values
                if(!current.right) return undefined;
                current = current.right;
            }
        }
    }
    // contains(value){ //slightly different implementation of search
    //     if(this.root === null) return false;
    //     var current = this.root,
    //     found = false;
    //     while(current && !found){
    //         if(value < current.value){
    //             current = current.left;
    //         } else if(value > current.value){
    //             current = current.right;
    //         } else {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    breadthFirstSearch(){
        if(!this.root) return [];
        let searchResult = [],
        queue = [],
        searchingPoint;
        queue.push(this.root);
        while(queue.length){
            //inputis the search tree
            //get the first in element of queue
            //push it into search result arr
            //queue the left then right of the element if they exist
            //repeat it until there is no element in queue
            //output arr
            searchingPoint = queue.shift();
            searchResult.push(searchingPoint);
            if(searchingPoint.left) queue.push(searchingPoint.left);
            if(searchingPoint.right) queue.push(searchingPoint.right);
        }
        return searchResult;
    }
    DFSpreOrder(){ //Depth first search pre Order starts from the root and saves it then recursively goes left then right
        let searchResult = [];
        function traverse(rootNode) {
            searchResult.push(rootNode);
            if(rootNode.left) traverse(rootNode.left);
            if(rootNode.right) traverse(rootNode.right);
        }
        traverse(this.root);
        return searchResult;
    }
    DFSpostOrder(){ //Depth first search post Order starts from the root, recursively goes left and right then saves the root
        let searchResult = [];
        function traverse(rootNode) {
            if(rootNode.left) traverse(rootNode.left);
            if(rootNode.right) traverse(rootNode.right);
            searchResult.push(rootNode);
        }
        traverse(this.root);
        return searchResult;
    }
    DFSinOrder(){ //Depth first search in Order starts from the root, recursively goes left then saves the root then goes to right
        let searchResult = [];
        function traverse(rootNode) {
            if(rootNode.left) traverse(rootNode.left);
            searchResult.push(rootNode);
            if(rootNode.right) traverse(rootNode.right);
        }
        traverse(this.root);
        return searchResult;
    }

}

