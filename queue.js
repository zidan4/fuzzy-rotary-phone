class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }

    dequeue() {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front
    }

    print() {
        if (this.size() === 0) {
            return 'Queue is empty'
        }
        let result = ''
        for (let i = this.front; i < this.rear; i++) {
            result += this.items[i] + ' '
        }
        return result

    }
    clear() {
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    isEmpty() {
        return this.size() === 0
    }

    isFull() {
        return this.size() === 10
    }

}

           

const queue = new Queue();
queue.enqueue(20);
