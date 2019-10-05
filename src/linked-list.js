const Node = require('./node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    let node = new Node(data);
    if (!this._tail) {
      this._head = node;
    } else {
      node.prev = this._tail;
      this._tail.next = node;
    }
    this._tail = node;
    this.length++;
    return this;
  }

  head() {
    return this._head ? this._head.data : null;
  }

  tail() {
    return this._tail ? this._tail.data : null;
  }

  at(index) {
    let tempNode = this._head;
    for (let i = 0; i < index; i++) {
      tempNode = tempNode.next;
    }
    return tempNode.data;
  }

  insertAt(index, data) {
    if (!this.length) {
      this.append(data);
      return;
    }
    let node = new Node(data);
    let prevNode = this._head;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }
    node.next = prevNode.next;
    node.prev = prevNode;
    prevNode.next = node;
    this.length++;
  }

  isEmpty() {
    return (this.length === 0);
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    let delNode = this._head;
    for (let i = 0; i < index; i++) {
      delNode = delNode.next;
    }
    let prevNodeFromDelNode = delNode.prev;
    let nextNodeFromDelNode = delNode.next;
    if (nextNodeFromDelNode) nextNodeFromDelNode.prev = delNode.prev;
    if (prevNodeFromDelNode) prevNodeFromDelNode.next = delNode.next;
    this.length--;
    return this;
  }

  reverse() {
    let nodeNext;
    let node = this._head;
    this._head = this._tail;
    this._tail = node;
    while (node) {
      nodeNext = node.next;
      node.next = node.prev;
      node.prev = nodeNext;
      node = nodeNext;
    }
    return this;
  }

  indexOf(data) {
    let index = 0;
    let node = this._head;
    while (index < this.length) {
      if (node.data === data) {
        return index;
      }
      index++;
      node = node.next;
    }
    return -1
  }
}

module.exports = LinkedList;
