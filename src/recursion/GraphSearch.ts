//Depth First Search
class GraphNode<T> {
  public Neighbour: GraphNode<T>[] | null;
  public data: T | null;

  constructor() {
    this.Neighbour = null;
    this.data = null;
  }
}

function depthFirstSearch<T>(
  node: GraphNode<T>,
  visited: GraphNode<T>[],
  goal: T
): boolean {
  if (node == null) return true;

  if (node.data == goal) {
    return true;
  }

  for()
  return false;
}
