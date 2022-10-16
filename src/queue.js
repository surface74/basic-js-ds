const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {

  list = {};
  last = undefined;
  getUnderlyingList() {
    return this.list;
  }

  enqueue(/* value */) {
    if (this.list?.value === undefined) {
      this.list = new ListNode(arguments[0]);
      this.last = this.list;
    }
    else {
      this.last.next = new ListNode(arguments[0]);
      this.last = this.last.next;
    }

    console.log(`enqueue list ${arguments[0]}: `, this.list);
  }

  dequeue() {
    let head = this.list.value;
    this.list = this.list.next;
    return head;
  }
}

module.exports = {
  Queue
};
