class MinHeap {
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

      if (
        Math.abs(this.heap[parentIndex]) < Math.abs(this.heap[currentIndex]) ||
        (Math.abs(this.heap[parentIndex]) === Math.abs(this.heap[currentIndex]) && this.heap[parentIndex] < this.heap[currentIndex])
      ) {
        break;
      }

      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      currentIndex = parentIndex;
    }
  }

  getMin() {
    if (this.heap.length === 1) return this.heap.pop();
    if (!this.heap.length) return 0;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }

  heapifyDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const length = this.heap.length;
    let smallestIndex = index;

    if (leftIndex < length && (
        Math.abs(this.heap[leftIndex]) < Math.abs(this.heap[smallestIndex]) ||
        (Math.abs(this.heap[leftIndex]) === Math.abs(this.heap[smallestIndex]) && this.heap[leftIndex] < this.heap[smallestIndex])
    )) {
      smallestIndex = leftIndex;
    }

    if (
      rightIndex < length && (
        Math.abs(this.heap[rightIndex]) < Math.abs(this.heap[smallestIndex]) ||
        (Math.abs(this.heap[rightIndex]) === Math.abs(this.heap[smallestIndex]) && this.heap[rightIndex] < this.heap[smallestIndex])
    )) {
      smallestIndex = rightIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      this.heapifyDown(smallestIndex);
    }
  }
}

const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let result = [];
const minHeap = new MinHeap();

input.forEach((val) => {
  if (val === 0) {
    result.push(minHeap.getMin());
  } else {
    minHeap.insert(val);
  }
});

console.log(result.join("\n"));
