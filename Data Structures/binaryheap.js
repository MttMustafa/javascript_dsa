//binary heap is a tree structure that childeren and parents has hierarchy between them. In this implementation parents are alway bigger then childeren.
//this implementation uses js array but different data structers can be used.

class MaxBinaryHeap{
    //constructer creates and array in instance this array will keep the data
    constructor(){ 
        this.bh = [];
    }
    insert(value){
        //this function used for inserting data to the array
        this.bh.push(value); //we push to the end of the array
        this.bubbleUp(this.bh.length - 1) //then we lend the index of end of the array to bubbleup function
    }
    bubbleUp(index){
        //this function used for placing newly inserted data to the right place in the hierarchy
        let bh = this.bh;
        function findPlace(index){
            let parentIndex = Math.floor((index-1)/2); // (index - 1) / 2 gives the index of the parent.
            if(parentIndex < 0 || bh[index] <= bh[parentIndex]) return bh; //if calculated parent index is smaller than zero OR child is smaller than parent this means child is in the right place so we return the array
            if(bh[index] > bh[parentIndex]){ //if child is bigger then the parent
            [bh[index],bh[parentIndex]] = [bh[parentIndex], bh[index]]; //we swap the parent and the child
            index = parentIndex; //we update the childs index (cause it swapped places with its parent)
            findPlace(index); //then we recall the function. it will call itself until it reaches the base condition which is childeren bubblsup to right place
            }
        }
        findPlace(index);
    }
    extractMax(){
        //this function extraces the highest number in the heap (which is the first element in the maxbinaryheap). this function is important for priority queue implementation
        let bh = this.bh;
        [bh[0],bh[bh.length-1]] = [bh[bh.length-1],bh[0]]; //we swap the first and last element to pop the first element without time complexity cost 
        let max = bh.pop(); //we pop the last element (which was the first element)
        if(bh.length > 0) this.reConstruct(); //if there is elements call the reconstruct function
        return max; //return the maximum number

    }
    reConstruct(){
        //after we pop the element that highest in the hierarchy we broke the hierarchy altogether so we need to reconstruct the heap
        let parentIdx = 0; //keeps the parents index value
        const length = this.bh.length; //keeps the arrays length
        const parent = this.bh[0]; //keeps the parent
        while(true){
            let leftChildIdx = 2 * parentIdx + 1; // 2 * parent_index +( 1 and 2 ) gives the left and right child indexes
            let rightChildIdx = 2 * parentIdx + 2;
            let leftChild,rightChild;
            let swap = null; //keep the element we should swap
            if(leftChildIdx < length){ //if left child index is not out of bounds of array
                leftChild = this.bh[leftChildIdx]; 
                if(leftChild > parent){ //if left child is bigger than current parent
                    swap = leftChildIdx; //we should swap with the parent with this child
                }
            }
            if(rightChildIdx < length){ //if right child is not out of bounds of array
                rightChild = this.bh[rightChildIdx];
                //if left child didnt qualified for swap and right child is bigger than parent or...
                //left child did qualified for swap but right child is bigger then left child 
                if(
                    (swap === null && rightChild > parent) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx; //we should swap right child with the parent
                }
            }
            if(swap === null) break; // if nothing qualified for swap then current parent is in the right place
            [this.bh[swap],this.bh[parentIdx]] = [this.bh[parentIdx],this.bh[swap]]; //if didnt break swap the qualifed child with the current parent 
            parentIdx = swap; //parents new index is now the swapped childs index
        }
    }
}
  