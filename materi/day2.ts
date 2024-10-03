// CARA GUNAKAN PRETTIER  SHIFT + ALT + F

// =========================== IF STATEMEENT ===========================
// syntax
// if (condition) {             condition bernilai boolean (true/false)
//     code block               kalo kondisi boolean bernilai true maka code block akan dieksekusi tetapi jika false maka tidak akan dieksekusi
//}

const age: number = 19;

if (age >= 17) {
  // code block  akan dijalankan jika kondisi bernilai true
  console.log("Anda bisa buat KTP");
}
console.log(age >= 17);

// ========================== ELSE STATEMENT ===========================
// Backup plan dari if statement

const age1: number = 16;
if (age1 >= 17) {
  // code block  akan dijalankan jika kondisi bernilai true
  console.log("Anda bisa buat KTP");
} else {
  // code block akan dijalankan jika kondisi if tidak terpenuhi
  console.log("Anda belum bisa buat KTP");
}

// ========================== ELSE IF STATEMENT ===========================
// cocok digunakan jika memiliki banyak kondisi contoh (a == b || a == c || a == d)

const input: string = "B";
const grade: string = input.toLowerCase(); // membuat nilai input menjadi huruf kecil

if (grade === "a") {
  console.log("Nilai bagus");
} else if (grade === "b") {
  console.log("Nilai Lumayan");
} else if (grade === "c") {
  console.log("Nilai buruk");
} else {
  console.log("nilai tidak diketahui");
}

// ========================= SWITCH CASE ==============================
// COCOK digunakan jika kondisinya hanya satu contohnya day

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break; // untuk memberhentikan program, jika tidak pakai break maka akan lanjut ke case selanjutnya
  case "selasa":
    console.log("Hari selasa");
    break;
  case "rabu":
    console.log("Hari rabu");
    break;
  default:
    console.log("Hari tidak ditemukan");
    break;
}

// ========================== LOGICAL OPERATOR ===========================
// && -> and
// || -> or
// !  -> not

// ============== OR =============
// salah satu kondisi harus bernilai true
const car: string = "mercy";
//      false           true            -> true
if (car === "bmw" || car === "mercy") {
  // jika salah satu kondisi terpenuhi maka boolean bernilai true
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

// ============== AND =============
// kedua kondisi harus bernilai true agar menghasilkan nilai true
const umur: number = 18;
const punyaSIM: boolean = true;

if (umur >= 18 && punyaSIM === true) {
  // (=== true) bisa dihapus karena boolean
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan ");
}

// ============= NOT ===============
// membalikkan nilai boolean
const isSunny: boolean = true; // biasanya untuk pengggunaan boolean nama variabel diberi "is" contoh "isSunny"
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ======================= TERNARY OPERATOR ==============================
// shortcut untuk if else condition
// condition ? true : false

const str: string = "typescript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}
//                condition             true            false         -> jika kondisi tidak terpenuhi maka akan mengeksekusi yang false
console.log(str === "javascript" ? "javascript" : "not javascript");

console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

// ===================== LOOP STATEMENT (PERULANGAN) ======================
// rangkaian instruksi yang dilakukan berulang kali hingga kondisinya terpenuhi
// type loop : for loop, while loop, dan do while loop

// ============= FOR LOOP =============
// memiliki 3 statement:
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang dieksekusi diakhir setiap iterasi
// SYNTAX : for(statement1;statement2;statement3){
//          code block yang akan diulang ulang
// }

for (let i = 0; i < 5; i++) {
  console.log("hello world");
  console.log(i);
}

// ============ WHILE LOOP ==============
// langsung melakukan while nya

let i: number = 1;
while (i < 10) {
  console.log("hello world");
  i++;
}

// ============= DO WHILE LOOP ============
// melakukan pengecekan dulu sekali baru melakukan while nya

let  count: number = 1;

do {
    console.log("ini iterasi ke: " + count);
    count++;
} while (count <= 5 );

// ============== BREAK ================

let sum: number = 0;
while(true){
console.log("sum : " + sum);
if (sum >= 5) break; // jika hanya satu line bisa menggunakan ini

// if (sum >= 5) {      //
//      break;          // ini versi jika nanti ada lebih dari satu line
// }                    //

sum++;
}

// ============== CONTINUE ===============
// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
    console.log(i); // sebelum di skip masih ada angka 3
    
    if (i === 3) {
        continue;
    }
    console.log(i); // setelah di skip angka 3 menghilang
}

