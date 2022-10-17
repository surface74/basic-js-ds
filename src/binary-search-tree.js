const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(/* data */) {
    let data = arguments[0];
    if (this._root === null) {
      this._root = new Node(data);
    }
    else {
      let next = this._root;

      while (next.data > data && next.left !== null || next.data < data && next.right !== null) {
        if (next.data > data) {
          next = next.left;
        } else {
          next = next.right;
        }
      }
      if (next.data > data) {
        next.left = new Node(data);
      } else {
        next.right = new Node(data);
      }
    }
  }

  has(/* data */) {
    const data = arguments[0];
    let next = this._root;
    if (next === null) {
      return false;
    }
    while (next.data > data && next.left !== null || next.data < data && next.right !== null) {
      if (next.data > data) {
        next = next.left;
      } else {
        next = next.right;
      }
    }
    return next.data === data;
  }

  find(/* data */) {
    const data = arguments[0];
    let next = this._root;
    if (next === null) {
      return null;
    }
    while (next.data > data && next.left !== null || next.data < data && next.right !== null) {
      if (next.data > data) {
        next = next.left;
      } else {
        next = next.right;
      }
      if (next === null) {
        return null;
      }
    }
    return (next.data === data) ? next : null;
  }

  remove(/* data */) {
    let node = this.find(arguments[0]);
    if (node === null) {
      return;
    }
    
    let parent = this.findParentNode(node);
    
    if (parent === null) {//remove the root node
      this._root = null;
      
      if (node.right !== null) {
        this.addNode(node.right);
      }
      if (node.left !== null) {
        this.addNode(node.left);
      }
    } else {
      if (parent.left?.data === node.data) {
        parent.left = null;
      } else {
        parent.right = null;
      }

      if (node.left !== null) {
        this.addNode(node.left);
      }
      if (node.right !== null) {

        this.addNode(node.right);
      }
    }
  }

  findParentNode(/* ListNode */) {
    let node = arguments[0];
    let data = node.data;
    let next = this._root;

    if (next.data === data) {
      return null;
    }
    while (next.left?.data !== data && next.right?.data !== data) {
      if (next.data > data) {
        next = next.left;
      } else {
        next = next.right;
      }
    }
    return next;
  }

  addNode(/* ListNode */) {
    let node = arguments[0];
    let data = node.data;
    if (this._root === null) {
      this._root = node;
    }
    else {
      let next = this._root;

      while (next.data > data && next.left !== null ||
        next.data < data && next.right !== null) {
        if (next.data > data) {
          next = next.left;
        } else {
          next = next.right;
        }
      }

      if (next.data > data) {
        next.left = node;
      } else {
        next.right = node;
      }
    }
  }

  min() {
    if (this._root === null) {
      return null;
    }
    let next = this._root;
    while (next.left !== null) {
      next = next.left;
    }
    return next.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }
    let next = this._root;
    while (next.right !== null) {
      next = next.right;
    }
    return next.data;
  }
}

module.exports = {
  BinarySearchTree
};