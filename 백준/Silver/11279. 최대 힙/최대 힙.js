class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[parentIndex] >= this.heap[currentIndex]) break;

            [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
            currentIndex = parentIndex;
        }
    }

    getMax() {
        if (this.heap.length === 1) return this.heap.pop();
        if (!this.heap.length) return 0;

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        
        return max;
    }

    sinkDown(index) {
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        const length = this.heap.length;
        let largestIndex = index;

        if (leftIndex < length && this.heap[leftIndex] > this.heap[largestIndex]) {
            largestIndex = leftIndex;
        }

        if (rightIndex < length && this.heap[rightIndex] > this.heap[largestIndex]) {
            largestIndex = rightIndex;
        }

        if (largestIndex !== index) {
            [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
            this.sinkDown(largestIndex);
        }
    }
}

const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let result = [];
const maxHeap = new MaxHeap();

input.forEach((val) => {
    if (val === 0) {
        result.push(maxHeap.getMax());
    } else {
        maxHeap.insert(val);
    }
})

console.log(result.join('\n'));
