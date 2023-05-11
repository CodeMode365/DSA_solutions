//Depth first traversal in BST (Print the left ==> Mid ==> Right) In acessending order

function DFT(root: TreeNode | null): void {
  if (root == null) return;

  if (root.left == null && root.right == null) {
    console.log(root.data + " ");
    return;
  }
  if (root.left != null) {
    DFT(root.left);
  }
  if (root.right != null) {
    DFT(root.right);
  }
}
