"use strict";
class TreeNode {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
function insertNode(head, data) {
    if (head == null) {
        head = new TreeNode(data);
        return head;
    }
    if (data < head.data) {
        head.left = insertNode(head.left, data);
    }
    else if (data > head.data) {
        head.right = insertNode(head.right, data);
    }
    return head;
}
