/* while loop: selama kondisi belum terpenuhi maka akan terus mengulang */
var hp = 100;
var damage = 20;

while (hp > 0) {
    hp = hp - damage;
    console.log('hp saat ini : ' + hp);
}

/* do while: lakukan dulu sebelum mengulang */
var angka = 5;
do {
    console.log(angka);
    angka--;
}
while(angka > 5);

/* for loop: mengulang sampai kondisi terpenuhi */
for (var i=0; i<5;i++) {
    console.log(i);
}

var y = 'nomor urut';
for (var y=1; y<=10; y++){
    console.log('nomor urut: ' + y);
}
console.log('-------------------');
// if(y % 2 == 0) {
//     console.log('nomor urut: ' + y);
// }
// for(var y=1; y<=20; y++) {
//     console.log(y);
// }

// nested for looping
for (var i=0; i<5; i++) {
    console.log('nilai i: ' +i);
    for(var j=0; j<3; j++) {
        console.log('nilai j: ' +j)
        for(var k=0; k<2; k++){
            console.log('nilai k: ' +k);
        }
    }
}
console.log('---------------');

var string = '';
for (var i=0; i<5; i++){
    
    for(var j=0; j<5; j++) {
        string += '*';
    }
    string += '\n';
}
console.log(string);


console.log('------------');

var string = '';
for(var i=0; i<5; i++){
    for(var j=0; j<i+1; j++){
        string += '*';
    }
    string += '\n'
}
console.log(string);

console.log('-------------');

var string = '';
for(var i=5; i>=1; i--){
    for(var j=1; j<=i; j++){
        string += '*';
    }
    string += '\n'
}
console.log(string)

console.log('==========')

var string = '';
for(var i=0; i<5; i++){
    for(var j=5; j>i; j--){
        string += '*';
    }
    string += '\n'
}
for(var i=0; i<5; i++){
   for(var j=0; j<i+1; j++){
        string += '*';
    }
    string += '\n'
}
console.log(string)