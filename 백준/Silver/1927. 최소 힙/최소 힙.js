const fs = require("fs");
const [N, ...numbers] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let heap = [];
let result = [];

numbers.forEach((num) => {
    if (num === 0) {
        result.push(remove(heap));
    } else {
        insert(heap, num);
    }
})

console.log(result.join('\n'));

function insert(heap, value) {
    heap.push(value);
    
    // bubble up 과정
    let idx = heap.length - 1; // 새로운 노드가 추가된 위치
    let parentIdx = Math.floor((idx - 1) / 2); // 부모 노드의 위치

    while (heap[parentIdx] && heap[idx] < heap[parentIdx]) { // 부모 노드가 존재하고, 새로운 노드가 부모 노드보다 작은 경우
        [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];  // 두 노드를 교체
        idx = parentIdx; // 인덱스를 부모의 인덱스로 변경
        parentIdx = Math.floor((idx - 1) / 2); // 새로운 부모 노드의 인덱스 계산
    }
}

function remove(heap) {
    if (!heap.length) {
        return 0;
    }

    if (heap.length === 1) {
        return heap.pop();
    }

    const value = heap[0]; // 힙의 최소값(루트 노드의 값)
    heap[0] = heap.pop(); // 힙의 끝에 있는 값을 루트 노드로 이동

    // bubble down 과정
    let idx = 0; // 루트 노드의 위치
    let leftIdx = idx * 2 + 1; // 왼쪽 자식 노드의 위치
    let rightIdx = idx * 2 + 2; // 오른쪽 자식 노드의 위치

    while ((heap[leftIdx] && heap[leftIdx] < heap[idx]) || // 왼쪽 자식 노드가 존재하면서 값이 루트 노드보다 작거나
        (heap[rightIdx] && heap[rightIdx] < heap[idx])) { // 오른쪽 자식 노드가 존재하면서 값이 루트 노드보다 작은 경우
            let minIdx = leftIdx; // 왼쪽 자식 노드가 더 작다고 가정
            if (heap[rightIdx] && heap[rightIdx] < heap[minIdx]) { // 오른쪽 자식 노드가 더 작다면
                minIdx = rightIdx; // 오른쪽 자식 노드의 위치로 변경
            }

            [heap[idx], heap[minIdx]] = [heap[minIdx], heap[idx]]; // 루트 노드와 최소 값을 가진 노드 위치를 교체
            idx = minIdx;
            // 왼쪽, 오른쪽 자식 노드의 위치 갱신
            leftIdx = idx * 2 + 1;
            rightIdx = idx * 2 + 2;
    }

    return value;
}