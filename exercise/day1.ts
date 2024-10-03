// NO 1 
// Untuk mencari luas sebuah persegi panjang maka menggunakan rumus P x L
const panjang1 : number = 5;
const lebar1 : number = 3;

const luas = panjang1 * lebar1;
console.log(luas); 

// NO 2
// Untuk mencari keliling persegi panjang maka menggunakan rumus 2(P+L)
const keliling = 2 * (panjang1 + lebar1);
console.log(keliling);

// NO 3
// Untuk mencari diameter sebuah lingkaran maka menggunakan rumus 2 x jari jari (radius)
const r : number = 5;
const diameter1 = 2 * r;
console.log(diameter1);

// Untuk mencari keliling lingkaran menggunakan rumus 2 x phi x r
const phi : number = Math.PI;
const kelilinglingkaran = 2 * phi * r;
console.log(kelilinglingkaran);

// Untuk mencari luas lingkaran menggunakan rumus phi x r^2
const luaslingkaran = phi * r ** 2
console.log(luaslingkaran);

// NO 4
// Untuk mencari sudut dari segitiga jika diketahui 2 sudutnya maka menggunakan rumus 180 derajat = sudut a + sudut b + sudut c
const suduta: number = 80;
const sudutb: number = 65;

const sudutc = 180 - (suduta + sudutb);
console.log(sudutc);

// NO 5 
// mengkonversi hari ke tahun dan ke hari
const datahari : number = 400;
//let datahari : number = 366;
const tahun2  = datahari / 365 ;
const tahun1 = Math.floor(tahun2);
// const databulan = datahari - (tahun1 * 365); 
const databulan = datahari % 365;
const bulan2 = databulan / 30;
const bulan1 = Math.floor(bulan2);
const datasisahari = databulan - (bulan1 * 30);

console.log( tahun1 + " year, " + bulan1 + " month, "+ datasisahari + " days"); // cara manual
console.log(`${tahun1} year, ${bulan1} month, ${datasisahari} days`); // cara lebih maju


//  NO 6
// mencari perbedaan hari diantara dua tanggal 



const date11 = new Date();
const date22 = new Date();
// const beda = new Date();
// set date1

const datee1 = date11.setFullYear(2024, 1, 20);
console.log(datee1);

// set date2
const datee2 = date22.setFullYear(2023, 1, 24);

const beda = (datee2-datee1);
// konversi detik ke hari dikali 86400
//console.log(beda);
const bedahari = (Math.abs(beda)/1000)/86400; // dibagi 1000 karena untuk mengubah miliseconds ke seconds
console.log(bedahari);

// let numberr = 1759282487 - 1727746487;
// console.log(numberr);
// let harii = numberr / 86400
// console.log(harii);


// camelcase

