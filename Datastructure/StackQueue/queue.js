// Queue using LL
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (!this.first) return "EMPTY";
    return this.first.data;
  }
  enqueue(data) {
    const node = new Node(data);
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.length++;
      return;
    }
    this.last.next = node;
    this.last = node;
    this.length++;
  }
  dequeue() {
    if (!this.first) return "EMPTY";
    this.first = this.first.next;
    this.length--;
    return;
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.peek());
q.dequeue();
console.log(q.peek());
