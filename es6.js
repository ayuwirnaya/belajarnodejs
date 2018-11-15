// var test = 'apalah';
// console.log(`vincent keren ${test}`);

// let x = 'halo'; console.log(x.repeat(5));
// // halohalohalohalohalo
// console.log(x.includes('lo')); // true

// console.log(x.startsWith('ha')); 
// console.log(x.startsWith('lo')); 
// console.log(x.startsWith('lo',2));
// console.log(x.endsWith('lo')); 
// console.log(x.endsWith('ha'));
// console.log(x.endsWith('ha',x.length-2));

// let buah = ['apel', 'duku', 'pir'];
// function test(buah1, buah2, buah3) {
//     console.log(buah1);
//     console.log(buah2);
//     console.log(buah3);
// }
// test(...buah) //titik selalu 3
// console.log('-----------------------------')

// let halo = function(){ 
//     console.log('Halo Dunia!')
// }
// let hai=() => {
//      console.log('Hai Hacker!')
// }
// let alo = () => console.log('Aloha!') //hanya berlaku 1 statement
// halo(); hai(); alo();
// console.log('-----------------------------')

// let g = () => 9.8
// console.log(g());
// console.log('-----------------------------')

// let x = function () { 
//     console.log('Hai ini X!');
// };
// let y = function (callback) { 
//     console.log('Halo ini Y!'); 
//     callback(); //memanggil function x
// }; 
// y(x);
// console.log('-----------------------------')

// var w = [0,1,2,3,4,5]
// var x = w.filter((val) => val !== 2); 
// var y = w.filter((val) => val % 2 == 0); 
// var z = w.filter((val) => val % 2 !== 0);
// console.log(x); 
// console.log(y); 
// console.log(z);
// console.log('-----------------------------')

var w = [1,4,9,16,25]
var x = w.map(Math.sqrt);
var y = w.map((val)=> val * 2);
var z = w.map((val)=> val!==9);
console.log(x); console.log(y); 
console.log(z);
console.log('-----------------------------')

var orang = [
    {nama : "Andi", marga: "Hasibuan"}, 
    {nama : "Budi", marga: "Sinaga"}, 
    {nama : "Caca", marga: "Pasaribu"}
    ];
    function namaLengkap(item) {
    var fullname = [item.nama,item.marga].join(" ");
    return fullname; 
}
    function tesMap() { 
        console.log(orang.map(namaLengkap)); 
        console.log(orang.map(namaLengkap)[0]); 
        console.log(orang.map(namaLengkap)[1]); 
        console.log(orang.map(namaLengkap)[2]);
    }
    tesMap()
    console.log('-----------------------------')

    let merk = 'Yamaha';
    let tahun = 2015;
    let mio = 
    { 
        merk: merk,
        prod: tahun
    }
    let vixion = { 
        merk, tahun
    }
    console.log(mio); 
    console.log(vixion);


