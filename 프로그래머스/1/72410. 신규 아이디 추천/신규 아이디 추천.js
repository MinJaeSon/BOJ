function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9-_.]/g, '');
    new_id = new_id.replace(/\.{2,}/g, '.');
    new_id = new_id.replace(/^\.|\.$/, '');
    if (!new_id.length) new_id = 'a';
    if (new_id.length >= 16) new_id = new_id.slice(0, 15);
    if (new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, -1);
    if (new_id.length <= 2) new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
    return new_id;
}