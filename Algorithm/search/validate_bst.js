// create a bst from an array
//  [5,1,4,null,null,3,6]
//          5
//      1       4
//          3       6

//  [2,1,3]
//      2
//  1       3

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

const tree = new BinaryTree();
const n1 = new Node(5);
tree.root = n1;
n1.left = new Node(1);
const n2 = new Node(4);
n2.left = new Node(3);
n2.right = new Node(6);
n1.right = n2;

console.log(tree.root);

function checkValidBST(node) {
  const queue = [];
  const res = [];
  queue.push(node);
  while (queue.length) {
    let cur = queue.shift();
    res.push(cur.data);
    if (cur.left) {
      if (cur.left.data > cur.data) return false;
      queue.push(cur.left);
    }
    if (cur.right) {
      if (cur.right.data < cur.data) return false;
      if (cur.right.left) {
        if (cur.right.left.data < cur.data) return false;
      }
      queue.push(cur.right);
    }
  }
  return true;
}

console.log(checkValidBST(tree.root));
