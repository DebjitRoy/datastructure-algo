class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }
  printFrwrd() {
    let cur = this.head;
    const res = [];
    while (cur) {
      res.push(cur.data);
      cur = cur.next;
    }
    console.log(res.join("->"));
  }
  printBckwrd() {
    let cur = this.tail;
    const res = [];
    while (cur) {
      res.push(cur.data);
      cur = cur.prev;
    }
    console.log(res.join("->"));
  }
}

const dll = new DLL();
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.printFrwrd();
dll.printBckwrd();
