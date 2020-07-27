// Binary Search Tree

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = null;
    this.right = null;
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
    let prev = null;
    let current = this.root;
    while (true) {
      prev = current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (!current) {
        break;
      }
    }
    if (data < prev.data) {
      prev.left = node;
    } else {
      prev.right = node;
    }
  }

  traverse(direction) {
    switch (direction) {
      case "INORDER":
        console.log("IN-ORDER");
        this.inorder(this.root);
        break;
      case "PREORDER":
        console.log("PRE-ORDER");
        this.preorder(this.root);
        break;
      case "POSTORDER":
        console.log("POST-ORDER");
        this.postorder(this.root);
        break;
    }
  }

  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  getMin() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  getMax() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  searchItem(item) {
    let current = this.root;
    while (current.data !== item) {
      if (item < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (!current) {
        return false;
      }
    }
    return true;
  }
}

const bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

bst.traverse("INORDER");
bst.traverse("PREORDER");
bst.traverse("POSTORDER");

console.log("Min: " + bst.getMin());
console.log("Max: " + bst.getMax());

console.log("Found: " + bst.searchItem(37));
console.log("Found: " + bst.searchItem(35));
