// versi JS
//const message = "Hello World"

// versi TS 
const message: string = "Hello World"; // wajib dijelaskan string atau number atau yang lain

// ================== STRING BUILT IN METHOD JS
const nama: string = "Siti Khodijah";
const nama2: string = " Metal";
const nama3: string = " Sekali";

console.log(nama.toLowerCase()); // cara langsung
console.log(nama.toUpperCase()); // cara langsung 
console.log(nama.replace("S", "o")); // cara langsung (Case sensitive sehingga yang keubah hanya yang S bukan s)
console.log(nama.replaceAll("i", "o")); // cara langsung (Merubah semua huruf i menjadi o)
console.log(nama.split("")); // cara langsung (membuat menjadi array per karakter)
console.log(nama.split(" ")); // cara langsung (membuat menjadi array per ketemu spasi)
console.log(nama.split("i")); // cara langsung (membuat menjadi array per ketemu i)
console.log(nama.concat(nama2)); // cara langsung (menggabungkan dua buah string)
console.log(nama.concat(nama2).concat(nama3)); // cara langsung (menggabungkan dua buah string)
console.log(nama.slice(2,8)); // cara langsung (memotong isi variable)

const nama1: string = nama.toLowerCase();
console.log(nama1); // ditampung dulu di variable nama1


// ================== TEMPLATE LITERALS / TEMPLATE STRINGconst

const nama4: string = "Jack";
const message1: string = `Welcome ${nama4}`; // ini namanya template literals

console.log(message1);
console.log("Welcome" + " " + nama4); // cara manual


// ================== NUMBER BUILD IN METHOD
const angka: string = "2000";
console.log(Number(angka)); // membuat string teridentifikasi sebagai number (PARSING DATA)
console.log(typeof Number(angka)); // "typeof" untuk mengecek tipe data
console.log(typeof angka); // menunjukkan bahwa variable angka bertipe data string
console.log(typeof parseInt(angka)); // menunjukkan bahwa variable angka bertipe number (cara lain pengganti "Number()")
console.log(Number.MAX_VALUE); // menunjukkan angka terbesar yang dapat disimpan
console.log(Number.MIN_VALUE); // menunjukkan angka terkecil yang dapat disimpan


// ================== TYPE CONVERSION

// string conversion
const angka1: number = 20;
console.log(String(123)); // merubah 123 menjadi string
console.log(angka1.toString()); // merubah 20 menjadi string

// boolean conversion
console.log(Boolean(-1));
console.log(Boolean(0)); // selain angka nol atau kosong maka bernilai true
console.log(Boolean(""));
console.log(Boolean("0")); // setiap ada nilainya maka bernilai true
console.log(Boolean("false"));


// ==================== DATE DATA TYPES
const now = new Date();

console.log(now);

// get method
console.log(now.getFullYear()); // mengambil data tahun
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getTime());


console.log(now.getUTCHours()+7);

// set method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2040);

console.log(now);


//======================= BASIC OPERATOR
// +
console.log(1 + 1); // penjumlahan
// -
console.log(2 - 1); // pengurangan
// *
console.log(2 * 4); // perkalian
// /
console.log(4 / 2); // pembagian
// %
console.log(9 % 2); // modulo sisa bagi
// ** 
console.log(3 ** 2); // perpangkatan

// example
const a = 20;
const b = 10;
const c = a + b;
console.log(c);


// ====================== MODIFY IN PLACE
// n = n + 2

let n: number = 4;
n += 2; // -> shortcut
// n = n + 2 // cara panjang

console.log(n);

let n1: number = 4;
n1 *= 2;

console.log(n1);


// ===================== INCREMENT & DECREMENT
let counter: number = 2;
//counter++; // increment
counter--; // decrement

console.log(counter);


// ===================== POSTFIX & PREFIX

let counter2: number = 2;

// console.log(++counter2); // PREFIX (angkanya ditambah dibalik layar dan ditampilkan langsung)
console.log(counter2++); // POSTFIX (angkanya ditambah dibalik layar setelah ditampilkan)

// ===================== COMPARISON OPERATOR

// console.log(5 == "5"); // hasilnya true karena yang di cek hanya valuenya
// console.log(5 === "5"); // hasilnya false karena yang di cek value dan tipe data
// console.log(5 != 2); // hasilnya true karena tidak sama valuenya
// console.log(5 !== 2); // hasilnya true tidak sama value dan tipe datanya
console.log(5 > 2);
console.log(5 < 2);
console.log(5 <= 5);
console.log(5 < 5);


// ===================== MATH

// Math ceil -> selalu membulatkan angka ke atas
console.log(Math.ceil(4.2)); 
// Math floor -> selalu membulatkan angka ke bawah
console.log(Math.floor(4.7));
// Math round -> membulatkan angka ke angka yang terdekat
console.log(Math.round(4.7));
console.log(Math.round(4.3));
// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1,5,6,7,8,2,3));
// Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(1,5,6,7,8,2,3));
// Math abs -> Menghilangkan tanda negatif
console.log(Math.abs(-11));
// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());



