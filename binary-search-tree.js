class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;

    while (current.val !== val) {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new Node(val);
        } else {
          current = current.right;
        }
      }
    }
    // console.log(this);
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, root = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < root.val) {
      if (root.left) {
        this.insertRecursively(val, root.left);
      } else {
        root.left = new Node(val);
      }
    } else {
      if (root.right) {
        this.insertRecursively(val, root.right);
      } else {
        root.right = new Node(val);
      }
    }

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) return current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, root = this.root) {
    // console.log({root, val});
    if (!root) return;

    if (val === root.val) {
      // console.log('found val!', val, root);
      return root;
    } else if (val < root.val) {
      // console.log('going left');
      return this.findRecursively(val, root.left);
    } else {
      // console.log('going right');
      return this.findRecursively(val, root.right);
    }

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visited = []) {
    // console.log({visited});
    if (!node) return;

    visited.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, visited);
    if (node.right) this.dfsPreOrder (node.right, visited);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visited = []) {
    if (!node) return;

    if (node.left) this.dfsInOrder(node.left, visited);
    visited.push(node.val);
    if (node.right) this.dfsInOrder(node.right, visited);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if (!node) return;

    if (node.left) this.dfsPostOrder(node.left, visited);
    if (node.right) this.dfsPostOrder(node.right, visited);
    visited.push(node.val);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    // if (!this.root) return visited;

    let toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let node = toVisitQueue.shift();

      if (node.left) {
        toVisitQueue.push(node.left);
      }
      if (node.right) {
        toVisitQueue.push(node.right);
      }

      visited.push(node.val);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, root = this.root) {


    // if current.left.val === val or current.right.val === val
    // if the nodes have left or right, remove the nodes and use the insert function
    // to find a new spot for them

    // if this is a leaf node: you can just delete the node
    // if current.left.left === null && current.left.right === null
    // or if current.right.left === null && current.right.right === null
    // set current.left/right to null
  }

  _findParentNode(val, root = this.root) {
    console.log({val, root});
    if (!root) return;

    if (val === root.left.val || val === root.right.val) {
      console.log({root});
      return root;
    } else if (val < root.val) {
      console.log('going left');
      return this.findRecursively(val, root.left);
    } else {
      console.log('going right');
      return this.findRecursively(val, root.right);
    }
  }
}

module.exports = BinarySearchTree;
