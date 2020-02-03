class Stack {
    constructor() {
        this.size = 0;
        this.list = [];
    }

    push(val) {
        this.list.push(val);
        this.size += 1;
    }

    pop() {
        this.list.pop();
        this.size -= 1;
    }

    peek() {
        if(this.size) return this.list[this.size - 1];
        return null;
    }

    find(val) {
        if(typeof val != Object) {
            let searchedItem = this.list.find(item => item == val);
            return `searchedItem item is ${searchedItem} at index no ${searchedItem}`;
        } else {
          console.log("obj")
        }
    }
}

let stack = new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push("sumit");
// stack.pop()
// stack.peek()
// console.log(stack.find('sumit'));
console.log(stack)
