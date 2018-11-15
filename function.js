// function multiply() {
//     var a = 5 * 5;
//     return a;
// }
// console.log(multiply());

// console.log('----------------')

// // function multiply(x) {
//     var a = x * x;
//     console.log(a);
//     return a;
// }
// multiply(3);

function multiply(x,y) {
    var a = x * y;
    console.log(a);
    return a;
}
multiply(3,5);

// FUNCTION RECURSIVE

//deadloop

function pengahbis(x) {
    if (x % 2 == 0) {
        x = x / 2;
        pengahbis(x);
    }
    else {
        console.log(x);
    }
}
pengahbis(200);

//delay time
var x = setTimeout(waktu, 3000);
function waktu() {
    console.log('vincent keren')
}
//membatalkan
clearTimeout(x);

//set interval
var x = setInterval(waktu, 1500);
var counter = 0;
function waktu() {
    console.log('vincent keren');
    counter ++;
    if(counter == 5) {
        clearTimeout(x);
    }
}

console.log('=====================')

function segitiga(baris) {
    for (var i=0; i<10; i++) {
        for (var j=0; j<4-i; j++) {
            console.log(' * ');
            counter ++;
        }
        if(i > 0) {
            if(counter == 4) {
                for (var l=0; l<7; l++)
            {
                baris = baris + ' * ';
            }
        }
        else
        {
            for (var k=2; k<1+(i*2); k++)
            {
                baris = baris + '   ';
            }
        }
        baris = baris + ' * ';
    }
    baris = baris + '\n';
}
console.log(segitiga);

}
segitiga(baris(10));
    
