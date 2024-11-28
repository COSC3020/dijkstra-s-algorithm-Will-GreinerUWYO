function dijkstra(graph, sourceNode) {
    // distances holds the distances from any given node to the start node
    const distances = [];
    // unexplored holds all nodes yet to be traversed
    const unexplored = [];

    // using test code retrieved from fellow student Collin Davis's repository

    // for each node in the graph, initialize distances
    for(const node in graph) {
        distances[node] = Infinity;
        unexplored[node] = true;
    }

    distances[sourceNode] = 0;
    let nextNode = sourceNode;

    while(unexplored.includes(true)) {
        let closestNode = null;
        for(let connectedNode in graph[nextNode]) {
            if(closestNode === null || graph[nextNode][connectedNode] < graph[nextNode][closestNode]){
                closestNode = connectedNode;
            }
            if(distances[nextNode] + graph[nextNode][connectedNode] < distances[connectedNode]) {
                distances[connectedNode] = distances[nextNode] + graph[nextNode][connectedNode];
            }
        }
        unexplored[closestNode] = false;
        nextNode = closestNode;
    }

    return distances;
}
