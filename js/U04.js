function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
console.clear();
// #4
for (let i = 1; i < 6; i++) {
        console.log(rand(1,10));
}

