namespace MyLinkList {
  export class Node<T> {
    public data: T;
    public next: Node<T> | null;

    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
  }

  export class LinkedList<T> {
    private head: Node<T> | null;

    constructor() {
      this.head = null;
    }

    //method to add a node to the end of linked list
    public append(data: T): void {
      const newNode = new Node(data);

      if (!this.head) {
        this.head = newNode;
      } else {
        //traverse to the end of the link list
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        //append the new node to the last
        current.next = newNode;
      }
    }

    public insertAt(data: T, position: number): void {
      const newNode = new Node(data);

      if (position == 0) {
        //set the new data as head (i.e shift other data by one step)
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let previous = null;
        let currentPostion = 0;

        //travese to the specified position
        while (currentPostion < position) {
          previous = current;
          current = current?.next;
          currentPostion++;
        }
        newNode.next = current;
        previous.next = newNode;
      }
    }

    //Method to remove a node from the linked list
    public remove(data: T): void {
      if (!this.head) return;
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
    public print(): void {
      let current = this.head;
      let listString = "";
      while (current) {
        listString += current.data + " ";
        current = current.next;
      }

      console.log(listString);
    }
  }
}

const newList = new MyLinkList.LinkedList<number>();
newList.append(23);
newList.append(24);
newList.append(25);
newList.append(26);
newList.print();
newList.insertAt(34, 2);
newList.print();
newList.remove(25);
newList.print();
