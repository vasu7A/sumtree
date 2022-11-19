class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

let root;

function sum(node) {
  if (node == null) {
    return 0;
  }
  return sum(node.left) + node.data + sum(node.right);
}

function isSumTree(node) {
  let ls;
  let rs;

  if (node == null || (node.left == null && node.right == null)) {
    return 1;
  }

  ls = sum(node.left);
  rs = sum(node.right);

  if (
    node.data == ls + rs &&
    isSumTree(node.left) != 0 &&
    isSumTree(node.right) != 0
  ) {
    return 1;
  }
  return 0;
}

root = new Node(26);
root.left = new Node(10);
root.right = new Node(3);
root.left.left = new Node(5);
root.left.right = new Node(6);
root.right.right = new Node(3);

if (isSumTree(root) != 0) {
  console.log(1);
} else {
  console.log(0);
}
