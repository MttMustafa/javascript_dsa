
class weightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){ //adds vertex to graph to graph
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; //if the vertex key doesnt exist create it. Value is empty list
    }
    addEdge(vertex_1,vertex_2,weight){ //ADDS edge between vertices 
        this.adjacencyList[vertex_1].push({vertex: vertex_2, weight}); //push vertex_2 to neighbors list of vertex_1
        this.adjacencyList[vertex_2].push({vertex: vertex_1, weight}); //push vertex_1 to neightbors list of vertex_2
    }
    Dijkstra(startVertex,endVertex){
        const priorityQ = new PriorityQueue(); //we use priority queue to determine which path has the lowest cost to go. We could have just loop through the distances obj but it wouldn't be efficient
        const distances = {}; //distances object will keep track of distance of every vertex from starting point
        const previous = {}; //previous object will keep track of which vertex comes before the vertex in the current path.
        const path = [];
        //we set every vertices distance value infinity except the starting vertex. we will update these with smaller values later
        //we set every vertices previous value null. we'll update this later
        //we set every vertices priority infinity (smallest has the biggest priority)
        for(let vertex in this.adjacencyList){
            if(vertex === startVertex){
                distances[vertex] = 0;
                priorityQ.enqueue(vertex,0);
            }
            else{
                distances[vertex] = Infinity;
                priorityQ.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;   
        }

        let smallest; //will be used for pointing vertex with lowest cost

        //as long as there are vertices in priority queue
        while (priorityQ.bh.length) {
            smallest = priorityQ.dequeue().value; //lowest cost vertex will be the first element in priorityQ 
            //if smallest is the last vertex
            if(smallest === endVertex) {
                //we building the path from end to begining
                //while there is a previous value...
                while(previous[smallest]) {
                    path.push(smallest); //push the current value to path list (which will start from the end vertex)
                    smallest = previous[smallest]; //new smallest is the previous of vertex
                }
                break; //break the outer while loop cause we found the shortes path
            }
            if(smallest || distances[smallest] !== Infinity){
                //looping through the neighbors of lowest cost vertex
                for(let neighbor of this.adjacencyList[smallest]){
                    let candidate = distances[smallest] + neighbor.weight; //adding cost of the smallest vertex with the cost of going smallest vertex to neighbor
                    //if the candidate cost is smaller than recorded cost...
                    if(candidate < distances[neighbor.vertex]){ 
                        distances[neighbor.vertex] = candidate; //...we update the cost 
                        previous[neighbor.vertex] = smallest; //we update where we came
                        priorityQ.enqueue(neighbor.vertex,candidate); //we add the neighbor to priority queue
                    }
                }
            } 
        }
       return path.concat(smallest).reverse();
    }
}


//Priority queue implemented with binary heap
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
  
let graph = new weightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A','B',4);
graph.addEdge('A','C',2);
graph.addEdge('B','E',3);
graph.addEdge('C','D',2);
graph.addEdge('C','F',4);
graph.addEdge('D','E',3);
graph.addEdge('D','F',1);
graph.addEdge('E','F',1);

console.log(graph.Dijkstra('A','E'));