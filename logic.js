var a = 5;
var b = 10;
a+=b;
console.log(a);
if (a < b) {
    console.log('a lebih kecil');
}else if(a > b) {
    console.log('a lebih besar');
}

var job = 'guru';
switch(job) {
    case 'petani':
        console.log('kerjaannya nyangkul');
        break; //memberhentikan case
    case 'guru':
        console.log('kerjaannya ngajar');
        break;
    case 'polisi':
        console.log('kerjaannya nilang');
        break;
    default: //jika tidak ada case terpenuhi
        console.log('kerjaannya ga jelas');
}

var alas = 'sendal';
var warna = 'merah';
var harga = 'murah';
switch(true) {
    case (alas == 'sendal' && warna == 'merah' && harga == 'murah'):
        console.log('saya suka sendal merah murah');
        break;
    case (alas == 'sepatu' && warna == 'biru' && harga == 'mahal'):
        console.log('saya suka sepatu biru mahal');
        break;
    case (alas == 'sendal' && warna == 'biru' && harga == 'murah'):
        console.log('saya suka sendal biru murah');
        break;
    case (alas == 'sepatu' && warna == 'merah' && harga == 'murah'):
        console.log('saya suka sepatu merah murah');
        break;
    case (alas == 'sepatu' && warna == 'biru' && harga == 'murah'):
        console.log('saya suka sepatu biru murah');
        break;
    default:
    console.log('ga usah pake sepatu');
}

let bulan = new Date();
bulan = bulan.getMonth();
console.log(bulan);
if (bulan == 0)
{
    console.log('bulan januari');
}
else if (bulan == 1)
{
    console.log('bulan febuari');
}else if(bulan == 2) {
    console.log('bulan maret');
}else if(bulan == 3) {
    console.log('april');
}else if(bulan == 4) {
    console.log('mei');
}else if(bulan == 5) {
    console.log('juni');
}else if(bulan == 6) {
    console.log('juli');
}else if(bulan == 7) {
    console.log('agustus');
}else if(bulan == 8) {
    console.log('september');
}else if(bulan == 9) {
    console.log('bulan oktober');
}


let x = new Date();
let hari = x.getDay();
console.log(hari);
if (hari == 0) {
    console.log('minggu');
}else if(hari == 1) {
    console.log('senin');
}else if(hari == 2) {
    console.log('selasa');
}else if(hari == 3) {
    console.log('rabu');
}else if(hari == 4) {
    console.log('kamis');
}else {
    console.log('hari ini ' + hari + ',' + hari.getDay() + hari.getMonth() + hari.getFullYear());
}
let y = new Date();
let jam = y.getHours() + ':' + y.getMinutes();
console.log(jam);


let massa = 67;
let tinggi = 1.78;
let IMT = massa / (tinggi ^ 2);
console.log(IMT);
if (IMT < 18.5) {
    console.log('berat badan kurang');
}else if(IMT = 18.5 < 24.9) {
    console.log('berat badan ideal');
}else if(IMT = 25.0 < 29.9) {
    console.log('berat badan berlebih');
}else {
    console.log('tidak punya bb');
}
