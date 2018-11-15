var x = 4;
y = 3;
z = 2;
w = (x + y * z / x * y)
console.log(Math.pow(w,z));

var a = 8e3;
console.log(a);

var jumlahhari = 485;
var tahun = Math.floor(jumlahhari / 360);
var bulan = Math.floor((jumlahhari % 360)/30);
var minggu = Math.floor((jumlahhari % 360) % 30 / 7);
var hari = Math.floor((jumlahhari % 360) % 30);
console.log(tahun + 'tahun ' + bulan + 'bulan ' + minggu + 'minggu ' + hari + 'hari');

var Andi = 0;
var Budi = 0;
var jumlahUsia = 49;
var banding = 0.4;
var usia = (0 + 4)
var Andi = 4 / 14 * jumlahUsia + 2;
var Budi = 10 / 14 * jumlahUsia +2;
console.log(Andi);
console.log(Budi);

let i = new Date();
console.log('hari ini tanggal ' + i.getDate() + '-' + (i.getMonth()+1) + '-' + i.getFullYear());

i = new Date();
i.setDate(i.getDate() + 1);
console.log('besok tanggal ' + i.getDate() + '-' + (i.getMonth()+1) + '-' + i.getFullYear());

i = new Date();
i.setDate(i.getDate() - 1);
console.log('kemarin tanggal ' + i.getDate() + '-' + (i.getMonth()+1) + '-' + i.getFullYear());

var string = 'Ada berapakah jumlah karakter ini';
string = string.split('e');
console.log(string);
console.log(string.length-1);


var jarak = 120;
var a = 60;
var b = 40;
var total = a + b;
var x = jarak / total;
var menit = x * 60;
var start = 9;
var tabrak = start + (menit / 60);
var tabrakmenit = menit % 60;
console.log(Math.floor(tabrak));
var tabrak = menit % 60;
console.log(start + tabrak + ':' + tabrakmenit);

