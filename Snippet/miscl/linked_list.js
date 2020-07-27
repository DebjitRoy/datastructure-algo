class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addSort(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (data < this.head.data) {
      node.next = this.head;
      this.head = node;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
      if (data < current.data) {
        prev.next = node;
        node.next = current;
        return;
      }
    }
    current.next = node;
  }
  display() {
    let current = this.head;
    const llarr = [];
    while (current) {
      llarr.push(current.data);
      current = current.next;
    }
    console.log([...llarr]);
  }
}

const ll = new LinkedList();
ll.addSort(4);
ll.addSort(6);
ll.addSort(2);
ll.addSort(7);
ll.addSort(3);

ll.display();
