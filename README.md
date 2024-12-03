# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The algorithm checks each connected node, and for each node, must compare all connected nodes. 
The main while loop runs V times, once for each node, then must compare all V distances each time, and then must look at all edges E.
So the big $\Theta$ complexity of this implementation is $\Theta(V * V * E)$ or $\Theta(V^2E)$

## Sources and Plagarism Statement
Took test code from CollinDavis and tweaked one line so it worked with my implementation.
Based my understanding of the algorithm on the graphs from [GeeksforGeeks}(https://www.youtube.com/watch?v=EFg3u_E6eHU&ab_channel=SpanningTree) and the video from [SpanningTree] (https://www.youtube.com/watch?v=EFg3u_E6eHU&ab_channel=SpanningTree) 
Worked with Michael Stoll to find debug the error in the test code and help optimize my code.

Did ask ChatGPT to help me understand the format of the graph as given to the function by the test function. Was shown the basic layout of the input, nothing more.
