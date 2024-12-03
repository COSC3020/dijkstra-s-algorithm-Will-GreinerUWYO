const fs = require('fs');
const { assert } = require('console');
eval(fs.readFileSync('code.js') + '');

// Example graphs and answers
let graphs = [];
let graphAnswer = [];
let startNodes = [];

// Graphs are of the form [ [set of nodes], [set of edges] ] where edges are lists of length 3: [u, v, weight]
// I borrowed the graph examples from Cian and Caden because I had no clue what to test it on and make sure my code worked. 
graphs[0] = [ // Example from slides
    [0, 1, 2, 3, 4, 5, 6, 7],
    [
        [0, 1, 2], [0, 2, 1], [0, 3, 4],
        [1, 2, 1], [1, 4, 10], [1, 5, 2],
        [2, 0, 9], [2, 4, 8],
        [3, 2, 2],
        [4, 3, 7], [4, 6, 1],
        [5, 7, 3],
        [6, 4, 4], [6, 5, 2],
        [7, 6, 1]
    ]
];
graphAnswer[0] = [9, 11, 0, 13, 8, 11, 9, 14];
startNodes[0] = 2;

graphs[1] = [ // Typical graph
    [0, 1, 2, 3, 4],
    [
        [0, 1, 3], [0, 3, 7],
        [1, 2, 1], [1, 3, 4],
        [2, 3, 2],
        [3, 4, 3],
        [4, 0, 8]
    ]
];
graphAnswer[1] = [0, 3, 4, 6, 9];
startNodes[1] = 0;

graphs[2] = [ // Empty graph
    [],
    []
];
graphAnswer[2] = [];
startNodes[2] = 25;

graphs[3] = [ // Disconnected graph
    [0, 1, 2, 3],
    [
        [0, 1, 3],
        [1, 0, 5],
        [2, 3, 5],
        [3, 2, 4]
    ]
];
graphAnswer[3] = [0, 3, undefined, undefined];
startNodes[3] = 0;

graphs[4] = [ // Single node looping back to itself
    [0],
    [
        [0, 0, 5]
    ]
];
graphAnswer[4] = [0];
startNodes[4] = 0;

graphs[5] = [ // Disconnected graph with two paths to node 1
    [0, 1, 2, 3],
    [
        [0, 1, 5],
        [0, 2, 1],
        [2, 1, 1],
        [3, 3, 3]
    ]
];
graphAnswer[5] = [0, 2, 1, undefined];
startNodes[5] = 0;

graphs[6] = [ [], []]; //Empty graph Test
graphAnswer[6] = []; 
startNodes[6] = 0; 
// All of this was my own following the logic of Cian and Caden's code
// Transform input graph format into the one expected by dijkstra()
function transformGraph(graph) {
    const [nodes, edges] = graph;
    const adjList = {};
    nodes.forEach(node => adjList[node] = {});
    edges.forEach(([u, v, weight]) => {
        adjList[u][v] = weight;
    });
    return adjList;
}

// Run tests
for (let i = 0; i < graphs.length; i++) {
    const graph = transformGraph(graphs[i]);
    const startNode = startNodes[i];
    const distances = dijkstra(graph, startNode);

    const expected = graphAnswer[i];
    const resultList = [];
    for (let j = 0; j < expected.length; j++) {
        resultList[j] = distances[j] === undefined ? undefined : distances[j];
    }

    try {
        assert(JSON.stringify(resultList) === JSON.stringify(expected), `Failed at graph ${i}`);
        console.log(`Test passed for graph ${i}`);
    } catch (error) {
        console.error(error.message);
    }
}
