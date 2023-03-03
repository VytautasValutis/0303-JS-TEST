const { match } = require("minimatch");

// #8
console.clear();

function lygineSuma(a, b) {
        if(typeof a === typeof b) {
                return 'Abudu parametrai vienodo tipo'+' '+typeof a;
        } else {
                return 'Parametrai skirtingo tipo';
        }
        
}

console.log(lygineSuma(5, [3,4]));
console.log(lygineSuma(5, 1));
console.log(lygineSuma([5, 6, 4], [3,4]));
console.log(lygineSuma([3,4], 11));

