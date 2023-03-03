// #10
console.clear();

function telefonoNumeris(a) {
        console.log(a);
        a.splice(0,0,'(');
        a.splice(4,0,')');
        a.splice(5,0,' ');
        a.splice(9,0,'-');

        return a.join('');
}

console.log(telefonoNumeris([5, 5, 5, 6, 0, 8, 3, 4, 5, 0]));

