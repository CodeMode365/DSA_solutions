class LinkedNode<T> {
  public data: T;
  public next: LinkedNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  get nextNode() {
    return this.next;
  }
  set nextNode(node: LinkedNode<T> | null) {
    this.next = node;
  }
}
/**Node both the linkedlist (A and B) are sorted in accending order*/

function mergeList<T>(
  A: LinkedNode<T> | null,
  B: LinkedNode<T> | null
): LinkedNode<T> | null {
  if (A == null) return B; 
  if (B == null) return A;
  if (A.data < B.data) {
    A.next = mergeList(A.next, B);
    return A;
  } else {
    B.next = mergeList(A, B.next);
    return B;
  }
}
