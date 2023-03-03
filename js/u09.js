// #9
console.clear();

function pirminisSkaicius(a) {
        console.log(a);
        for (let i = 2; i < a / 2; i++) {
                if (a % i === 0) {
                        return 'Pirminis';
                }
        }
        return 'Sudetinis';
}

console.log(pirminisSkaicius(101));

