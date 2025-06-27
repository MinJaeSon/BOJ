function solution(players, callings) {
    let rateMap = {};
    players.forEach((player, i) => rateMap[player] = i);
    
    for (const called of callings) {
        const idx = rateMap[called];
        const frontPlayer = players[idx - 1];
        
        rateMap[called]--;
        rateMap[frontPlayer]++;
        
        [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];
    }
    
    return players;
}