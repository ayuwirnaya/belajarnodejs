// console.log('Vincent Keren');console.log('lalalala');

// console.log(__dirname);
// console.log(__filename);

var nama= 'Vincent';
console.log(nama);

var usia = '23' + '11';
console.log(usia);

let angka = 14;
angka = 56;
console.log(angka);

var a = 5;
var b = 10;
var c = a;
a = b;
b = c;
console.log(a);
console.log(b);

var string = 'kabar';
console.log(string + ' baik');

var boolean = true;
console.log(boolean);

var boolean = true;
console.log(typeof(boolean));

var boolean = 'true';
console.log(typeof(boolean));

var boolean = 123;
console.log(typeof(boolean));

//MEMECAH KARAKTER
var string = 'vincent keren';
console.log(string.length);
console.log(string.indexOf('keren'));
console.log(string.substr(5,7));
console.log(string.slice(1,6));
console.log(string.split('e'));
var array = string.split('e');
console.log(array[3]);
console.log(array.length);

var x = 'vincent keren';
var y = 'KEREN';
var z = 12345;
console.log(x.toUpperCase());
console.log(y.toLowerCase());
console.log(x.replace('e','a')); //number tidak bisa replace
console.log(x.replace(/e/g,'a')); //with regexx
console.log(z.toString());
z = z.toString();
console.log(typeof(z));

var a = 123.987;
console.log(parseInt(a)); //mengubah string menjadi interger (hanya angka)
console.log(typeof(parseInt(a)));
console.log(parseFloat(a)); //mengambil angka dibelakang koma
console.log(typeof(parseFloat(a)));

var nama = 'vincent';
var usia = 23;
console.log(nama + ' ' + usia);

//BASIC MATH
var a = 3.14;
var b = 3;
var c = 123e5; //pangkat 5
var d = 123e-5; //pangkat minus 5
var e = 0.1 + 0.4;
var f = (0.2 * 10 + 0.1 * 10) / 10; //perkalian didahulukan dan didlm kurung selanjutnya
console.log(c);
console.log(d);
console.log(e);
console.log(f);

var a = 5;
a+=2;
//sama dengan a = a + 2;
console.log(a);

var a = 5;
a-=2;
console.log(a);

var a=5;
a*=2
console.log(a);
console.log(Math.PI);
console.log(Math.abs(-5)); //return the absolute value of a number
console.log(Math.pow(8,3)); //pangkat
console.log(Math.sqrt(64)); //return square root of a number
console.log(Math.cbrt(8)); //return cubes of a number
console.log(Math.round(1.4)); //pembulatan hanya angka dpn
console.log(Math.floor(1.4)); //pembulatan angka kebawah
console.log(Math.ceil(1.4)); //pembulatan angka keatas
console.log(Math.random()); // mengambil angka random 0,...
console.log(Math.floor(Math.random()*89)+11); // 11 batasminimal, 89 batas penambahan


//MENAMPILKAN WAKTU SAAT INI
let n = new Date();
console.log(n.getFullYear()); 
console.log(n.getMonth());
console.log(n.getDate());
console.log(n.getDay());
console.log(n.getHours());
console.log(n.getMinutes());
console.log(n.getSeconds());
console.log(n.getMilliseconds());
console.log(n.getTime()); //diambil dari januari 1, 1970

var m = new Date(n.getTime());
console.log(m);

var hari = n.getFullYear() + '/' + n.getMonth() + '/' + n.getDate();
console.log(hari);

currentTime = new Date();
currentTime.setMinutes(currentTime.getMinutes()+30); //menit ditambah 10menit
console.log(currentTime);




