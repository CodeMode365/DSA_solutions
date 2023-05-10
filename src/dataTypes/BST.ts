module BST {
  export class Node {
    public left: Node | null;
    public right: Node | null;
    public data: number;

    constructor(data: number) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }

  export class Tree {
    private root: Node | null;

    constructor() {
      this.root = null;
    }

    public addNode(data: number): void {
      const newNode = new Node(data);
      if (!this.root) {
        this.root = newNode;
        return;
      } else {
        let current: Node | null = this.root;
        while (current) {
          if (newNode.data < current.data) {
            current = current.left;
          } else if (newNode.data > current.data) {
            current = current.right;
            if (current == null) {
              current = newNode;
            }
          }
          if (current == null) {
            current = newNode;
            break;
          }
        }
      }
    }

    public printNodes() {
      if (!this.root) return;
      else {
      }
    }
  }
}
