class BinaryHeap {
  constructor() {
    this.heap = [];
  }
  findParent(n) {
    return Math.floor((n - 1) / 2);
  }
  findChildren(n) {
    return [2 * n + 1, 2 * n + 2];
  }
  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
  insert(data) {
    this.heap.push(data);
    let curPos = this.heap.length - 1;
    let parentPos = this.findParent(curPos);
    if (data < this.heap[parentPos]) return;
    while (curPos > 0) {
      let parentPos = this.findParent(curPos);
      if (this.heap[curPos] > this.heap[parentPos]) {
        this.swap(curPos, parentPos);
        curPos = parentPos;
      } else {
        break;
      }
    }
  }
  extractMax() {
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    let curPos = 0;
    let [c1, c2] = this.findChildren(curPos);
    let max = this.heap[c1] > this.heap[c2] ? this.heap[c1] : this.heap[c2];
    if (this.heap[curPos] > max) return;
    while (curPos < this.heap.length) {
      let [c1, c2] = this.findChildren(curPos);
      if (c1 > this.heap.length - 1) return;

      let max = !this.heap[c2] ? c1 : this.heap[c1] > this.heap[c2] ? c1 : c2;
      if (this.heap[curPos] < this.heap[max]) {
        this.swap(curPos, max);
        curPos = max;
      }
    }
  }
}

const bh = new BinaryHeap();
bh.insert(91);
bh.insert(70);
bh.insert(65);
bh.insert(66);
bh.insert(68);
bh.insert(15);
bh.insert(42);
bh.insert(75);

console.log(bh.heap);
bh.extractMax();
console.log(bh.heap);
