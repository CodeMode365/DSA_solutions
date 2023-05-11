class TreeNode {
  public left: TreeNode | null;
  public right: TreeNode | null;
  public data: number;

  constructor(data: number) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function insertNode(head: TreeNode | null, data: number): TreeNode | null {
  if (head == null) {
    head = new TreeNode(data);
    return head;
  }
  if (data < head.data) {
    head.left = insertNode(head.left, data);
  } else if (data > head.data) {
    head.right = insertNode(head.right, data);
  }
  return head;
}
