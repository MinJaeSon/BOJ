const fs = require("fs");
let [N, ...nodes] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
N = Number(N);

const tree = {};

nodes.forEach((row) => {
    const [cur, l, r] = row.split(' ');
    tree[cur] = {
        left: l === "." ? null : l,
        right: r === "." ? null : r
    };
});

function preorder(node) { // 전위 : 루트 -> 왼 -> 오
    if (!node) return;
    process.stdout.write(node);
    preorder(tree[node].left);
    preorder(tree[node].right);
}

function inorder(node) { // 중위 : 왼 -> 루트 -> 오
    if (!node) return;
    inorder(tree[node].left);
    process.stdout.write(node);
    inorder(tree[node].right);
}

function postorder(node) { // 후위 : 왼 -> 오 -> 루트
    if (!node) return;
    postorder(tree[node].left);
    postorder(tree[node].right);
    process.stdout.write(node);
}

preorder("A");
console.log();
inorder("A");
console.log();
postorder("A");