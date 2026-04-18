function solution(record) {
    const result = [];
    const info = new Map();
    
    for (let msg of record) {
        const [action, id, nickname] = msg.split(' ');
        
        if (action === 'Enter' || action === 'Change') {
            info.set(id, nickname);
        }
    }
    
    const map = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.',
    };
    
    for (let msg of record) {
        const [action, id, nickname] = msg.split(' ');
        
        if (action === 'Change') {
            continue;
        }
        
        result.push(info.get(id) + map[action]);
    }
    
    return result;
}