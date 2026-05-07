/*
balance node : 홀짝노드 (자기 노드의 값이 짝/홀수면 연결된 노드의 개수도 짝/홀수인 노드)
unbalance node : 역홀짝노드 (자기 노드의 값이 짝/홀수면 연결된 노드의 개수는 홀/짝수인 노드)

로 정의했을 때,
balance node가 한 개만 있는 트리는 balance tree(홀짝트리)이다.

bal-t에서
루트가 아닌 어떤 노드가 짝/홀이면
루트 노드를 제외한 나머지 노드들과의 연결된 개수는 홀/짝이어야 함
-> 루트 노드만 bal-n 이고 나머지 노드들은 unbal-n
*/

const forest = Array.from({ length: 1000001 }, () => []);
const visited = Array(1000001).fill(false);

function getGraphNodes(x) {
    const nodes = [x];
    visited[x] = true;
    
    let head = 0;
    
    while (head < nodes.length) {
        const cur = nodes[head++];
        
        for (const child of forest[cur]) {
            if (!visited[child]) {
                visited[child] = true;
                nodes.push(child);
            }
        }
    }
    
    return nodes;
}

function solution(nodes, edges) {
    const result = [0, 0];
    
    edges.forEach(([u, v]) => {
        forest[u].push(v);
        forest[v].push(u);
    });
    
    for (let node of nodes) {
        if (!visited[node]) {
            const graphNodes = getGraphNodes(node);
            
            let balanced = 0;
            let unbalanced = 0;
            
            for (let graphNode of graphNodes) {
                const edgeCount = forest[graphNode].length;
                
                if (edgeCount % 2 === graphNode % 2) {
                    balanced++;
                } else {
                    unbalanced++;
                }
            }
            
            if (balanced === 1) {
                result[0] += 1;
            }
            if (unbalanced === 1) {
                result[1] += 1;
            }
        }
    }
    
    return result;
}