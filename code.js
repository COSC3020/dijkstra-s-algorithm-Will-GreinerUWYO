function dijkstra(graph, sourceNode) {
    const distances = [];
    const unexplored = new Set(Object.keys(graph));

    for (const node in graph) {
        distances[node] = Infinity;
    }

    distances[sourceNode] = 0;
    let node = sourceNode;
    while (unexplored.size > 0) {
        let closestNode = null;

        // Find the closest unexplored node
        unexplored.forEach(node => {
            if (closestNode === null || distances[node] < distances[closestNode]) {
                closestNode = node;
            }
        });

        if (closestNode === null || distances[closestNode] === Infinity) {break};

        unexplored.delete(closestNode);

        // Update distances for neighbors
        for (const neighbor in graph[closestNode]) {
            const newDistance = distances[closestNode] + graph[closestNode][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
            }
        }
    }

    return distances;
}
