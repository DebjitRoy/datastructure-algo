class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  push(data) {
    this.data.push(data);
    this.length++;
  }
  pop() {
    this.length--;
    return this.data.pop();
  }
  peek() {
    return this.data[this.length - 1];
  }
  empty() {
    return this.data.length === 0;
  }
}

class MyQueue {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
    this.length = 0;
  }
  push(data) {
    this.enqueueStack.push(data);
    this.length++;
  }
  pop() {
    if (!this.enqueueStack.length) return "EMPTY";
    while (!this.enqueueStack.empty()) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
    const dq = this.dequeueStack.pop();
    while (!this.dequeueStack.empty()) {
      this.enqueueStack.push(this.dequeueStack.pop());
    }
    return dq;
  }
}

const q = new MyQueue();
q.push(10);
q.push(20);
q.push(30);
q.push(40);
console.log(q.pop());
console.log(q.pop());
