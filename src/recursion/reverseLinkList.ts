class ListNode<T> {
  public data: T;
  public next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  get nextNode() {
    return this.next;
  }
  set nextNode(node: ListNode<T> | null) {
    this.next = node;
  }
}

const node1 = new ListNode(45);
const node2 = new ListNode(46);
const node3 = new ListNode(47);
const node4 = new ListNode(48);
node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;

function Print_List<T>(headNode: ListNode<T> | null) {
  let temp = headNode;
  let list = " ";
  while (temp !== null) {
    list += temp.data + " ";
    temp = temp.next;
  }
  console.log(list);
}

function reverseList<T>(head: ListNode<T>): ListNode<T> {
  if (head.data == null || head.next == null) return head;
  const last: ListNode<T> = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}
Print_List(node1);
console.log("Reversing...");
reverseList(node1);
Print_List(node4);
