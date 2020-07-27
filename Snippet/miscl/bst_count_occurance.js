// Binary Search Tree - Count Occurance

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }
    let curr = this.root;
    let prev = null;
    while (true) {
      //   console.log(curr.data);
      prev = curr;
      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
      if (!curr) {
        break;
      }
    }
    if (data < prev.data) {
      prev.left = node;
    } else {
      prev.right = node;
    }
  }

  inorder(node) {
    console.log("IN-Order");
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  display() {
    this.inorder(this.root);
  }

  search(item) {
    let curr = this.root;
    while (curr.data !== item) {
      if (item < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
      if (!curr) {
        return null;
      }
    }
    return curr;
  }

  incrNodeCount(node) {
    node.count++;
  }

  addItem(item) {
    if (!this.root) {
      this.insert(item);
    }
    const found = this.search(item);
    if (found) {
      this.incrNodeCount(found);
    } else {
      this.insert(item);
    }
  }
}

const bst = new BST();
bst.addItem(23);
bst.addItem(45);
bst.addItem(16);
bst.addItem(37);
bst.addItem(3);
bst.addItem(99);
bst.addItem(37);
bst.addItem(22);
bst.addItem(45);

// bst.display();

console.log(bst.search(45));
console.log(bst.search(3));
