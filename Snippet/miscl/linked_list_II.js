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
    this.size = 0;
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
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

  insert(data, pos) {
    if (pos >= this.size) {
      this.add(data);
      return;
    }
    const node = new Node(data);
    let current = this.head;
    let cur_pos = 0;
    if (pos === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let prev = null;
    while (current.next && pos > cur_pos) {
      prev = current;
      current = current.next;
      cur_pos++;
    }
    prev.next = node;
    node.next = current;
    this.size++;
  }

  deleteEl(pos) {
    if (pos >= this.size) {
      return -1;
    }
    if (pos === 0) {
      const temp = this.head.next;
      delete this.head;
      this.head = temp;
      return;
    }
    let current = this.head;
    let prev = null;
    let cur_pos = 0;
    while (current.next && pos > cur_pos) {
      prev = current;
      current = current.next;
      cur_pos++;
    }
    prev.next = current.next;
    return current;
  }

  // swap(f_pos, s_pos) {}
}

const ll = new LinkedList();
ll.add(4);
ll.add(6);
ll.add(2);
ll.add(7);
ll.add(3);

ll.insert(10, 10);
ll.insert(20, 0);
ll.insert(30, 3);

ll.display();
console.log(ll.deleteEl(4));
ll.display();
