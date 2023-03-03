// #6
function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
}

console.clear();

const a = [...Array(rand(20, 30))].map(a => a = rand(10, 30));
let max = a[0];
for (let i = 1; i < a.length; i++) {
        if(a[i] > max) max = a[i];
}
console.log(a, max);

