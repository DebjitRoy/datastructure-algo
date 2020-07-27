// Stack using LL
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (!this.top) return "EMPTY";
    return this.top.data;
  }
  push(data) {
    const node = new Node(data);
    if (!this.top) {
      this.top = node;
      this.bottom = node;
      this.length++;
      return;
    }
    node.next = this.top;
    this.top = node;
    this.length++;
  }
  pop() {
    if (!this.top) return "EMPTY";
    this.top = this.top.next;
    this.length--;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
