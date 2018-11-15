function palindrome(str) {
    var length = str.length;
    for (var i=0; i<length/2; i++) {
        if(str[i] == str[length - 1 - i]) {
            return true;
        }
    }
    return false;
}
console.log(palindrome('katak'));


// let x = [40, 100, 1, 5, 25, 10];
// x.sort(function(a,b)
// { return a-b
// });
//  console.log(x[0])
//  console.log(x[x.length-1])

var number = [40, 100, 1, 5, 25, 10];
function angkasort(a,b) {
    return b-a;
    }
    
    number.sort(angkasort);

    console.log(number);


var angka = 9;
function fibonacci(num) {
    
    var firstnumber = 0; next = 1; then = 1;
    for(var i=2; i<=num; i++) {
       then = firstnumber + next;
       firstnumber = next;
       next = then;
    }
    return then;
};
console.log(fibonacci(angka));



// function invoice(number) { //jadikan dynamic, digantikan angka berapapun tetap sama  
//     satuan = number.toString().length;
//     var zero; 
//     for(var i=0; i<=number; i++) {
//         zero = '';
//         for (var j=0; j < satuan - (i.toString().length); j++) {
//             zero = zero + '';
//         } 
//         console.log('INV' + zero + i);  
//     }
// }
// invoice(145);

// var orang = [
//     {
//         namaDepan : Andi,
//         usia : 30,
//         job : ["polisi", "satpam"]
//     },
//     {
//         alamat : 'kebun jeruk',
//         email : 'asal@yahoo.com',
//         anak : {
//             anakpertama: 'kevin',
//             anakedua: 'inka',
//         }
//     }
// ];

// orang.negara = 'indonesia';
// delete orang.usia;
// console.log(orang[1] + anak.anakedua);