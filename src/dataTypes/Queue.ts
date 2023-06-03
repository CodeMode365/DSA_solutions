class Queue<T> {
  private items: Array<T>;
  private maxLength: number;
  private head: T;
  private tail: T;

  constructor(length: number, items?: Array<T>) {
    this.items = items || [];
    this.maxLength = length;
    this.head = this.items[0];
    this.tail = this.items[this.items.length - 1];
  }

  private updateHeadTail() {
    this.head = this.items[0];
    this.tail = this.items[this.items.length - 1];
  }

  public Enqueue(item: T) {
    if (this.items.length >= this.maxLength)
      throw Error("Queue is aready Full!!");
    else this.items.push(item);
  }
  public Dequeue() {
    if (this.items.length <= 0) throw Error("Queue is aready Empty!!");
    else this.items.shift();
  }

  public ShowQueue() {
    return this.items;
  }

  public GetHead() {
    this.updateHeadTail();
    return this.head;
  }
  public GetTail() {
    this.updateHeadTail();
    return this.tail;
  }

  public isEmpty(): boolean {
    if (this.items.length == 0) return true;
    else return false;
  }

  public isFUll(): boolean {
    if (this.items.length >= this.maxLength) return true;
    else return false;
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
