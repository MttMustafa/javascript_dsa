//graph imlementation with adjacency list

class Graph{
    constructor(){
        this.adjacencyList = {}; //vertices kept in a hash table every key of vertices keeps its neightbors in a list
    }
    addVertex(vertex){ //adds vertex to graph to graph
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; //if the vertex key doesnt exist create it. Value is empty list
    }
    addEdge(vertex_1,vertex_2){ //ADDS edge between vertices 
        this.adjacencyList[vertex_1].push(vertex_2); //push vertex_2 to neighbors list of vertex_1
        this.adjacencyList[vertex_2].push(vertex_1); //push vertex_1 to neightbors list of vertex_2
    }
    removeEdge(vertex_1,vertex_2){ //removes edge between vertices
        this.adjacencyList[vertex_1] = this.adjacencyList[vertex_1].filter( vertex => vertex !== vertex_2); //vertex_1's new neighbor list doesnt include vertex_2
        this.adjacencyList[vertex_2] = this.adjacencyList[vertex_2].filter( vertex => vertex !== vertex_1); //vertex_2's new neighbor list doesnt include vertex_1
    }
    removeVertex(vertex){ //removes vertex
        while(this.adjacencyList[vertex].length){ //while vertex's neightbor list is not 0
            const adjacentVertex = this.adjacencyList[vertex].pop(); //pops the last element from neighbor list of the vertex
            this.removeEdge(vertex,adjacentVertex); //removes edge between popped neightbor and vertex
        }
        delete this.adjacencyList[vertex]; //deletes the vertex left without neighbors
    }
    DFS_recursion(startingVertex){ //depth first search in graphs with recuresion
        const searchResult = []; //search result will kept here
        const visitedVertices = {}; //visited vertices will kept in this hash table so we dont revisit them
        const adjacencyList = this.adjacencyList; 

        (function DFS(vertex) {
            if(!vertex) return null; //if there is no vertex calles this return null
            searchResult.push(vertex);  //push the vertex search result list
            visitedVertices[vertex] = true; //mark the vertex as visited with adding it to hash table
            //starting from the given vertex it loops through the neighbors of given vertex and with each neighbor it recalls the function given that neighbors as argument (this new call will be on top of original call on the call stack)
            //then it loops through the neighbors and does the same until there is no unvisited neighbors left 
            adjacencyList[vertex].forEach( neighborVertex => {
                if(!visitedVertices[neighborVertex]){
                    return DFS(neighborVertex);
                }
            });
        })(startingVertex); //this form of function definition runs the function imidiatly after definition

        return searchResult;
    }
    DFS_iterative(startingVertex){ //dfs with loop
        const stack = [startingVertex], //we'll use our own stack data structure cause we'll lack the call stack we have in recursion. we add the starting vertex to the stack right away
        searchResult = [], 
        visitedVertices = {},
        adjacencyList = this.adjacencyList;
        let currentVertex;
        visitedVertices[startingVertex] = true; //we mark the starting vertex as visited
        while(stack.length){ //while stack is not empty
            currentVertex = stack.pop(); //pop the vertex top of the stack
            searchResult.push(currentVertex); //push the vertex to search result
            adjacencyList[currentVertex].forEach( neighborVertex => { //loop through the neighbors of popped vertex
                if(!visitedVertices[neighborVertex]){ //if its not visited
                    visitedVertices[neighborVertex] = true; //mark it as visited
                    stack.push(neighborVertex); //and add the neighbor on top of the stack
                }
            }) 
            //end of the foreach loop we stacked all the neighbors of the popped vertex and in the next while loop
            //we will visit the neighbors of the last element of the popped vertex in the first place
            //we will keep looping until there is no unvisited vertices which will leave stack empty
        }   
        return searchResult;
    }
    //bfs writeen quite simller to dfs_iter but instead of stack we use queue 
    //this means we visit the first childeren of the starting vertex then each their childeren unlike dfs we keep looping through the childeren of a child
    BFS(startingVertex){ 
        const queue = [startingVertex],
        searchResult = [],
        visitedVertices = {},
        adjacencyList = this.adjacencyList;
        let currentVertex;
        visitedVertices[startingVertex] = true;
        while(queue.length){
            currentVertex = queue.shift();
            searchResult.push(currentVertex);
            adjacencyList[currentVertex].forEach( neighborVertex => {
                if(!visitedVertices[neighborVertex]){
                    visitedVertices[neighborVertex] = true;
                    queue.push(neighborVertex);
                }
            })
        }
        return searchResult;
    }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');

console.log(g.BFS('A'));
