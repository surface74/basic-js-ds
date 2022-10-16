const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  _root = null;

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

    // while (next?.data !== undefined || data !== next?.data) {// || next.data > data && next.left === null || next.data < data && next.right === null) {
    //   if (next.data > data) {
    //     next = next.left;
    //   } else {
    //     next = next.right;
    //   }
    // }
    // return next.data === data;
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let next = this._root;
    while (next.left !== null) {
      next = next.left;
    }
    return next.data;
  }

  max() {
    let next = this._root;
    while (next.right !== null) {
      next = next.right;
    }
    return next.data;
  }
}

let tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
console.log(tree.has(7));

module.exports = {
  BinarySearchTree
};