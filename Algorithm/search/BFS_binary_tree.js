class Queue {
  // ideally should be implemented using Linked list where enqueue dequeue is O(1)
  // for simplicity, implemented in stack
  constructor() {
    this.data = [];
  }
  enqueue(val) {
    this.data.push(val);
  }
  dequeue() {
    return this.data.shift();
  }
  empty() {
    return this.data.length === 0;
  }
}

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

const bfs = (node) => {
  const res = [];
  const q = new Queue();
  q.enqueue(node);
  while (!q.empty()) {
    let cur = q.dequeue();
    res.push(cur.data);
    cur.left && q.enqueue(cur.left);
    cur.right && q.enqueue(cur.right);
  }
  return res;
};

const dfs_pre = (node, res = []) => {
  if (!node) return;
  res.push(node.data);
  dfs_pre(node.left, res);
  dfs_pre(node.right, res);
  return res;
};

const dfs_in = (node, res = []) => {
  if (!node) return;
  dfs_in(node.left, res);
  res.push(node.data);
  dfs_in(node.right, res);
  return res;
};

const dfs_post = (node, res = []) => {
  if (!node) return;
  dfs_post(node.left, res);
  dfs_post(node.right, res);
  res.push(node.data);
  return res;
};

const bfsRecursive = (node, res = [], queue = [node]) => {
  if (!queue.length) return res;
  let cur = queue.shift();
  res.push(cur.data);
  cur.left && queue.push(cur.left);
  cur.right && queue.push(cur.right);
  return bfsRecursive(node, res, queue);
};

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log(bst.root);
console.log(bst.search(15));
console.log(bst.search(12));
// traverse(bst.root);
console.log("BFS: " + bfs(bst.root));
console.log("BFS Recursive: " + bfsRecursive(bst.root));

console.log("DFS - Preorder: " + dfs_pre(bst.root));
console.log("DFS - Inorder: " + dfs_in(bst.root));
console.log("DFS - Postorder: " + dfs_post(bst.root));

//           9
//     4           20
//  1     6   15      170
//BFS - 9 4 20 1 6 15 170
