class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const node = new Node(value);
        this.head = node;
        this.tail = node;
        this.length = 1;
        console.log(123);

    }

    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    pop() {
        let temp = this.head;
        let prev = this.head;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }


        while (temp.next) {
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        let temp = this.head;
        this.head = newNode,
            this.head.next = temp;
        this.length++;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        const temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--

        return temp;
    }

    getLast() {
        let temp = this.head;
        while (temp) {

            if (!temp.next) {
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }

    getIndex(index) {
        let count = 1;
        let temp = this.head;

        while (temp) {
            if (count === index) {
                return temp;
            }
            temp = temp.next;
            count++;
        }
        return null;
    }

    insertIndex(index, value) {
        const newNode = new Node(value);
        const temp = this.getIndex(index);
        const next = temp.next ? null : this.getIndex(index + 1);
        newNode.next = next;
        temp.next = newNode;
        this.length++;
    }
}

const l = new LinkedList(1);
l.push(2);
l.push(3);
l.push(100);
l.unshift(0)
l.shift();
console.log(l.getLast());
console.log('getIndex');

console.log(l.getIndex(4));

console.log(l.insertIndex(1, 102));


console.log(l);