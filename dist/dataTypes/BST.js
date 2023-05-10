"use strict";
var BST;
(function (BST) {
    class Node {
        constructor(data) {
            this.left = null;
            this.right = null;
            this.data = data;
        }
    }
    BST.Node = Node;
    class Tree {
        constructor() {
            this.root = null;
        }
        addNode(data) {
            const newNode = new Node(data);
            if (!this.root) {
                this.root = newNode;
                return;
            }
            else {
                let current = this.root;
                while (current) {
                    if (newNode.data < current.data) {
                        current = current.left;
                    }
                    else if (newNode.data > current.data) {
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
        printNodes() {
            if (!this.root)
                return;
            else {
            }
        }
    }
    BST.Tree = Tree;
})(BST || (BST = {}));
