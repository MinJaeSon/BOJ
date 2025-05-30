function solution(wallpaper) {
    wallpaper = wallpaper.map((row) => row.split(''));
    
    let [lux, luy, rdx, rdy] = [wallpaper.length, wallpaper[0].length, 0, 0];
    
    for (let y = 0; y < wallpaper.length; y++) {
        for (let x = 0; x < wallpaper[0].length; x++) {
            if (wallpaper[y][x] === '#') {
                lux = Math.min(lux, y);
                luy = Math.min(luy, x);
                rdx = Math.max(rdx, y + 1);
                rdy = Math.max(rdy, x + 1);
            }
        }
    }
    
    return [lux, luy, rdx, rdy];
}