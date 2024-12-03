function dijkstra(graph, sourceNode) {
    // declare an empty array size = num of nodes
    let distances = new Array (graph.length);
    // declare a set with one object per node
    let unexplored = new Set(Object.keys(graph));

    // fill distance array with infinity
    for (const node in graph) {
        distances[node] = Infinity;
    }

    // set the distance from sourceNode to sourceNode = 0
    distances[sourceNode] = 0;
    // while there are unexplored nodes
    while (unexplored.size > 0) {
        // reset this variable
        let closestNode = null;

        // Find the closest unexplored node
        unexplored.forEach(node => {
            if (closestNode === null || distances[node] < distances[closestNode]) {
                closestNode = node;
            }
        });

        // if no closest unexplored, then the graph is disconnected
        if (closestNode === null || distances[closestNode] === Infinity) {break};

        // remove closestNode from unexplored, as it is now explored
        unexplored.delete(closestNode);

        // Update distances for neighbors using the values from the current node
        for (const neighbor in graph[closestNode]) {
            const newDistance = distances[closestNode] + graph[closestNode][neighbor];
            if (newDistance < distances[neighbor]|| distances[neighbor] === Infinity) {
                distances[neighbor] = newDistance;
            }
        }
    }

    return distances;
}
