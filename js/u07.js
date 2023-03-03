const { match } = require("minimatch");

// #7
function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
}

console.clear();

const a = [...Array(100)].map(a => a = String.fromCharCode(rand(65, 68)));
let numA = 0;
let numB = 0;
let numC = 0;
let numD = 0;
for (let i = 0; i < a.length; i++) {
        switch (a[i]) {
                case 'A':
                        numA++        
                        break;
                case 'B':
                        numB++        
                        break;
                case 'C':
                        numC++        
                        break;
        
                default:
                        numD++;
        };
}
console.log(a, numA, numB, numC, numD);

