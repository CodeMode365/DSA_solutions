"use strict";
//Depth First Search
class GraphNode {
    constructor() {
        this.Neighbour = null;
        this.data = null;
    }
}
function depthFirstSearch(node, visited, goal) {
    if (node == null)
        return true;
    if (node.data == goal) {
        return true;
    }
    for (;;)
        return false;
}
