class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }
    let cur = this.root;
    let prev = null;
    while (cur) {
      prev = cur;
      if (data < cur.data) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    if (data < prev.data) {
      prev.left = node;
    } else {
      prev.right = node;
    }
  }
  search(data) {
    let cur = this.root;
    while (cur) {
      if (data === cur.data) return true;
      if (data < cur.data) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return false;
  }
}

const traverse = (node) => {
  if (!node) return;
  console.log(node.data);
  traverse(node.left);
  traverse(node.right);
};
const bst = new BinarySearchTree();
bst.insert(30);
bst.insert(10);
bst.insert(12);
bst.insert(5);
bst.insert(45);
console.log(bst.root);
console.log(bst.search(15));
console.log(bst.search(12));
traverse(bst.root);
