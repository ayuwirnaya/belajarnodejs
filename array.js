// var array = [3, 'agus', 1, 'joko', 'budi', 2];
// for (var i=0; i<array.length; i++) {
//     console.log(array[i]);
// }
// console.log(array.toString()); //menggabungkan array dengan koma
// console.log(array.join(' * ')); //menyatukan array
// console.log(array.sort()); //mensortir dari angka awal/ alfabet --> interger(angka)lbh dlu drpd alfabet
// console.log(array.reverse()); //membalik dari alfabet/angka terakhir
// console.log(array.reverse(array.sort()));
// console.log(array.indexOf('agus'));

// array.pop(); //menghapus data terakhir
// array.push('anwar'); //menambahkan data array di belakang
// console.log(array);

// array.shift(); //menambahkan data di depan
// array.unshift('anwar'); //menghapus data di dpan
// console.log(array);

// array.splice(2, 1, 'lemon', 'kiwi'); //selipkan data mulai dari data ke-2 yang diselipkan kemudian dipotong
// array.splice(0,1); 
// delete array[2]; //mengosongkan value
// console.log(array);

// let buah = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// let buah2 = buah.slice(1); //membuang index dan sisanya dihitung dari kiri
// console.log(buah2)
// let buah4 = buah.slice(1,4);
// console.log(buah4)

var buah1 = ['mangga'];
buah1[5] = 'pisang';
console.log(buah1);

let buah = ['Jeruk','Nanas','Apel']; buah.push('Duku');
console.log(buah) 
buah[buah.length] = 'Pisang';
console.log(buah)
buah[6] = 'Mangga'; 
console.log(buah)

let nama1 = ['Andi','Budi'];
let nama2 = ['Caca','Dede','Euis'];
let nama3 = nama1.concat(nama2); 
let nama4 = nama2.concat(nama1);
console.log(nama3) 
console.log(nama4)

// var array = [['agi', 'caca'], ['diana', 'doni'], ['dimas', 'sari', 'lala']];
// console.log(array[1][1]);

var array = ['budi', 'agung', 'jedi'];
for(var i =0; i<array.length; i++) {
    if(array[i] == 'budi') {
        delete array[i];
    }
}
console.log(array);
