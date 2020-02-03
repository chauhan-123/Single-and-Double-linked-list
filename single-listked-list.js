// Without tail
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    insertAtEnd(elem) {
        let node = new Node(elem);
        if (!this.head || !this.size) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size += 1;
    }
    insertAtStart(elem) {
        let node = new Node(elem);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            this.head = node;
            node.next = current;
        }
        this.size += 1;
    }
    insertAtIndex(elem, index) {
        let node = new Node(elem);
        if (!this.head) {
            this.head = node;
        } else {
            if (index > this.size || index < 1) {
                console.log("error")
            } else if (this.index == 1) {
                let current = this.head;
                this.head = node;
                this.node = current;
            } else {
                let current = this.head;
                let pre, i = 1;
                while (i < index) {
                    pre = current;
                    current = current.next;
                    i += 1;
                }
                pre.next = node
                node.next = current;
            }
            this.size += 1;
        }
    }
    removeAtFirst() {
        if (!this.head) {
            return null
        } else {
            let current = this.head;
            this.head = current.next;
        }
        this.size -= 1;
    }
    removeAtEnd() {
        if (!this.head) {
            return null;
        } else {
            let current = this.head;
            let pre;
            while (current.next) {
                pre = current;
                current = current.next;
            }
            pre.next = null;
        }
        this.size -= 1;
    }
    removeAtCenter(index) {
        if (!this.head) {
            return null;
        } else if (index < 1 || index > this.size) {
            return false;
        } else if (index == 1) {
            let current = this.head;
            this.head = current.next;
            current = null;
        } else {
            let current = this.head;
            let pre;
            for (let i = 1; i < index; i++) {
                pre = current;
                current = current.next;
            }
            pre.next = current.next;
            current = null;
        }
        this.size -= 1;
    }

}

var list = new LinkedList();

list.insertAtStart(5);
list.insertAtStart(6);
list.insertAtEnd(7);
list.removeAtCenter(3);

console.log(JSON.stringify(list));