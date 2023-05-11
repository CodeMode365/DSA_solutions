"use strict";
class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    get nextNode() {
        return this.next;
    }
    set nextNode(node) {
        this.next = node;
    }
}
/**Node both the linkedlist (A and B) are sorted in accending order*/
function mergeList(A, B) {
    if (A == null)
        return B;
    if (B == null)
        return A;
    if (A.data < B.data) {
        A.next = mergeList(A.next, B);
        return A;
    }
    else {
        B.next = mergeList(A, B.next);
        return B;
    }
}
