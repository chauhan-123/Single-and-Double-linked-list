// With tail
class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    insertAtLast(val) {
        let node = new Node(val);
        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            let current = this.tail;
            this.tail = node;
            node.prev = current;
            current.next = node;
        }
        this.size += 1;
    }

    insertAtStart(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            this.head = node;
            node.next = current;
            current.prev = node;
        }
        this.size += 1;

    }

    insertAtIndex(val, index) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            if (index > this.size + 1 || index < 1) {
                return null
            } else if (index == this.size + 1) {
                let current = this.tail;
                this.tail = node;
                node.prev = current;
                current.next = node;
            } else {
                let current = this.head;
                let pre, i = 1;
                while (i < index) {
                    pre = current;
                    current = current.next;
                    i += 1;
                }
                pre.next = node;
                node.next = current;
                current.prev = node;
                node.prev = pre;
            }
        }
        this.size += 1;
    }

    removeAtEnd() {
        if (!this.head || !this.tail) {
            return null;
        } else {
            let tail = this.tail.prev;
            tail.next = null;
        }
        this.size -= 1;
    }

    removeAtStart() {
        if (!this.head || !this.tail) {
            return null;
        } else {
            let current = this.head;
            this.head = current.next;
            this.head.prev = null;
        }
        this.size -= 1;
    }

    removeAtCenter(index) {
        if (!this.head || !this.tail) {
            return null;
        } else if (index < 1 || index > this.size + 1) {
            return false
        } else if (index == 1) {
            let current = this.head;
            this.head = current.next;
            current = null;
        } else {
            let current = this.head;
            let pre;
            let first = current.next;
            for (let i = 1; i < index; i++) {
                pre = current;
                current = current.next;
            }
            pre.next = current.next;
            current = null;
            this.first = pre;
        }
        this.size -= 1;
    }

    helperFunc() {
        let item = [];
        let current = this.head;
        let i = 1;
        while (current.next) {
            item.push({ [i]: current.val });
            current = current.next;
            i += 1;
        }
        item.push({ [i]: current.val });
        return item;
    }
}

let list = new DoublyLinkedList();
list.insertAtLast(1);
list.insertAtLast(2);
list.insertAtLast(3);
list.insertAtLast(4);
// list.removeAtEnd()
// list.removeAtStart();
// list.removeAtStart();
// list.removeAtCenter(3)
list.removeAtCenter(1)
// console.log(list)
console.log(list.helperFunc());