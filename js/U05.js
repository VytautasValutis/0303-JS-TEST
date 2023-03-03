// #5
function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
}

console.clear();

let a = 0;
do {
        a = rand(1, 10);
        console.log(a);
} while (a !== 5); 

