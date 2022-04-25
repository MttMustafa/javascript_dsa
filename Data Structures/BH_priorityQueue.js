class Node{
    constructor(value,priority){
        this.value = value;
        this.priority = priority;
    }
}


class PriorityQueue{
    constructor(){
        this.bh = []; //binary heap
    }
    enqueue(value,priority){
        let newNode = new Node(value,priority);
        this.bh.push(newNode);
        this.bubbleUp(this.bh.length - 1)
    }
    bubbleUp(index){
        let bh = this.bh;
        function findPlace(index){
            let parentIndex = Math.floor((index-1)/2);
            if(parentIndex < 0 || bh[index].priority >= bh[parentIndex].priority) return bh;
            if(bh[index].priority < bh[parentIndex].priority){
            [bh[index],bh[parentIndex]] = [bh[parentIndex], bh[index]];
            index = parentIndex;
            findPlace(index);
            }
        }
        findPlace(index);
    }
    dequeue(){
        let bh = this.bh;
        [bh[0],bh[bh.length-1]] = [bh[bh.length-1],bh[0]];
        let maxPriority = bh.pop();
        if(bh.length > 0) this.reConstruct();
        return maxPriority;

    }
    reConstruct(){
        let parentIdx = 0;
        const length = this.bh.length;
        const parent = this.bh[0];
        while(true){
            let leftChildIdx = 2 * parentIdx + 1;
            let rightChildIdx = 2 * parentIdx + 2;
            let leftChild,rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.bh[leftChildIdx];
                if(leftChild.priority < parent.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.bh[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < parent.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            [this.bh[swap],this.bh[parentIdx]] = [this.bh[parentIdx],this.bh[swap]];
            parentIdx = swap;
        }
    }
}
  