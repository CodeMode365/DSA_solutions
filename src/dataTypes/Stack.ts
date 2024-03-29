/*
Stack is a LIFO data structure (Last In First Out)
Stores objects into a sort of "Vertical Tower"
push() to add the item in top of the Stack 
pop() to delete the item form the top of the Stack
*/


class Stack<T> {
  private items: Array<T>;
  private maxLen: number;

  constructor(maxLen: number) {
    this.items = [];
    this.maxLen = maxLen;
  }

  public push(item: T) {
    if (this.items.length >= this.maxLen) {
      throw Error("Stack is already Full!!");
    }
    this.items.push(item);
    console.log(item + " added to stack");
  }

  public pop() {
    if (this.items.length <= 0) {
      throw Error("Stack is already Empty");
    }

    console.log(this.items[this.items.length - 1] + " removed from the stack");
    this.items.pop();
  }

  public trackStack() {
    if (this.items.length <= 0)
      console.log("Can't get itesm because it is empty!!");
    else {
      console.log("<======= Stack ========>");
      for (let i = this.items.length - 1; i >= 0; i--) {
        console.log(` ========
 || ${this.items[i]} || ${
          this.items[i] === this.items[this.items.length - 1]
            ? "<===== Top"
            : ""
        } ${this.items[i] === this.items[0] ? "<==== Bottom" : ""}
 ========`);
      }
    }
  }

  public getTop(): T | null {
    if (this.items.length > 0) return this.items[this.items.length - 1];
    console.log("Stack is Empty");
    return null;
  }

  public checkEmpty(): boolean {
    if (this.items.length == 0) return true;
    return false;
  }
  public checkFull(): boolean {
    if (this.items.length > 0) return true;
    return false;
  }

  public getPosition(item: T): number {
    return this.items.indexOf(item);
  }
}

const Stack1 = new Stack(5);
Stack1.push("Apple");
Stack1.push("Ball");
Stack1.push("Cat");
Stack1.push("Dog");
Stack1.push("Elephant");
Stack1.pop();
Stack1.pop();
Stack1.pop();
Stack1.trackStack();
console.log(Stack1.getTop());
console.log(Stack1.getPosition("12321"));
