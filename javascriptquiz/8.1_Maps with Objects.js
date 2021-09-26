let object1 = {
    name: 'string1',
}
let object2 = {
    name: 'string2',
}
let object3 = {
    name: 'string3'
}

let newmap = new Map();
newmap.set(object1, 'id1');
newmap.set(object2, 'id2');
newmap.set(object3, 'id3');

for (let [key, value] of newmap) {
    console.log(key + ':' + value);
}