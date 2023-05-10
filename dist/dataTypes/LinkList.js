"use strict";
var MyLinkList;
(function (MyLinkList) {
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    MyLinkList.Node = Node;
    class LinkedList {
        constructor() {
            this.head = null;
        }
        //method to add a node to the end of linked list
        append(data) {
            const newNode = new Node(data);
            if (!this.head) {
                this.head = newNode;
            }
            else {
                //traverse to the end of the link list
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                //append the new node to the last
                current.next = newNode;
            }
        }
        insertAt(data, position) {
            const newNode = new Node(data);
            if (position == 0) {
                //set the new data as head (i.e shift other data by one step)
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                let current = this.head;
                let previous = null;
                let currentPostion = 0;
                //travese to the specified position
                while (currentPostion < position) {
                    previous = current;
                    current = current === null || current === void 0 ? void 0 : current.next;
                    currentPostion++;
                }
                newNode.next = current;
                previous.next = newNode;
            }
        }
        //Method to remove a node from the linked list
        remove(data) {
            if (!this.head)
                return;
            if (this.head.data === data) {
                this.head = this.head.next;
                return;
            }
            let current = this.head;
            let previous = null;
            while (current && current.data !== data) {
                previous = current;
                current = current.next;
            }
            if (current) {
                previous.next = current.next;
            }
        }
        //Method to print the linked list
        print() {
            let current = this.head;
            let listString = "";
            while (current) {
                listString += current.data + " ";
                current = current.next;
            }
            console.log(listString);
        }
    }
    MyLinkList.LinkedList = LinkedList;
})(MyLinkList || (MyLinkList = {}));
const newList = new MyLinkList.LinkedList();
newList.append(23);
newList.append(24);
newList.append(25);
newList.append(26);
newList.print();
newList.insertAt(34, 2);
newList.print();
newList.remove(25);
newList.print();
