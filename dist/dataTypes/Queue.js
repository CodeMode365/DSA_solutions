"use strict";
class Queue {
    constructor(length, items) {
        this.items = items || [];
        this.maxLength = length;
        this.head = this.items[0];
        this.tail = this.items[this.items.length - 1];
    }
    updateHeadTail() {
        this.head = this.items[0];
        this.tail = this.items[this.items.length - 1];
    }
    Enqueue(item) {
        if (this.items.length >= this.maxLength)
            throw Error("Queue is aready Full!!");
        else
            this.items.push(item);
    }
    Dequeue() {
        if (this.items.length <= 0)
            throw Error("Queue is aready Empty!!");
        else
            this.items.shift();
    }
    ShowQueue() {
        return this.items;
    }
    GetHead() {
        this.updateHeadTail();
        return this.head;
    }
    GetTail() {
        this.updateHeadTail();
        return this.tail;
    }
}
const q1 = new Queue(5);
q1.Enqueue(5);
q1.Enqueue("her");
q1.Enqueue(12);
q1.Enqueue(545);
q1.Enqueue(43);
console.log(q1.ShowQueue());
console.log("HEad:" + q1.GetHead());
console.log("Tail:" + q1.GetTail());
q1.Dequeue();
q1.Enqueue("Random Text");
console.log(q1.ShowQueue());
