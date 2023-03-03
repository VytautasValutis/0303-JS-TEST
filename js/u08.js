const { match } = require("minimatch");

// #8
console.clear();

function lygineSuma(a, b) {
        if(typeof a === 'object') {
                return (a.length + b.length);
        } else {
                return (a + b);
        }
        
}

console.log(lygineSuma(5, 1));
console.log(lygineSuma([5, 6, 4], [3,4]));
console.log(lygineSuma([3,4], [6, 11, 33, 1]));

