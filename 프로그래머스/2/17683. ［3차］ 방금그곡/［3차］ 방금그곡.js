function solution(m, musicinfos) {
    let result = [];
    
    musicinfos.forEach((musicinfo, idx) => {
        let [start, end, title, music] = musicinfo.split(',');
        music = replaceSharp(music);
        
        const playedTime = formatToMinute(end) - formatToMinute(start); // 음악 재생 시간
        let playedMusic = ''; // 실제 재생된 부분
        
        for (let i = 0; i < Math.floor(playedTime / music.length); i++) {
             playedMusic += music;
        }
       
        for (let i = 0; i < playedTime % music.length; i++) {
            playedMusic += music[i];
        }
        
        if (playedMusic.includes(replaceSharp(m))) {
            result.push([title, playedTime, idx]);
        }
    });
    
    result.sort((a, b) => b[1] - a[1] || a[2] - b[2]);
    
    return result.length ? result[0][0] : '(None)';
}

function formatToMinute(format) {
    const [hh, mm] = format.split(':').map(Number);
    
    return hh * 60 + mm;
}

function replaceSharp(s) {
    return s.replace(/C#/g, "c")
            .replace(/D#/g, "d")
            .replace(/F#/g, "f")
            .replace(/G#/g, "g")
            .replace(/A#/g, "a");
}