// 10 -> 5 -> 16

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
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
      this.tail = this.tail.next;
    }
    this.length++;
  }
  insert(data, pos) {
    const node = new Node(data);
    if (pos === 0) {
      node.next = this.head;
      this.head = node;
    } else if (pos >= this.length) {
      this.tail.next = node;
      this.tail = node;
    } else {
      let i = 0;
      let cur = this.head;
      while (i < pos - 1 && cur) {
        cur = cur.next;
        i++;
      }
      const temp = cur.next;
      cur.next = node;
      node.next = temp;
    }
    this.length++;
  }
  remove(data) {
    if (!this.head) return false;
    if (this.head.data === data) {
      this.head = this.head.next;
    } else if (this.tail.data === data) {
      let cur = this.head;
      while (cur.next.next) {
        cur = cur.next;
      }
      this.tail = cur;
      cur.next = null;
    } else {
      let cur = this.head;
      let prev = null;
      while (cur && cur.data !== data) {
        prev = cur;
        cur = cur.next;
      }
      prev.next = cur.next;
    }
    this.length--;
  }
  reverse() {
    if (!this.head || this.head === this.tail) return;
    let first = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.tail = this.head;
    this.head.next = null;
    this.head = first;
    // return first;
  }

  print() {
    let cur = this.head;
    const res = [];
    while (cur) {
      res.push(cur.data);
      cur = cur.next;
    }
    console.log(res.join("->"));
  }
}

const ll = new LinkedList();
ll.append(10);
ll.append(5);
ll.append(16);

console.log(ll.head);

ll.print();

ll.insert(2, 2);
ll.insert(20, 1);
ll.print();

ll.remove(16);
ll.print();

ll.append(30);
ll.print();

ll.reverse();
ll.print();
