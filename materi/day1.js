console.log("hello world");

// comment 1
// comment  2

/* 
comment 
tapi 
bisa 
panjang 
*/

// ================ VARIABLE (storage / penampungan data) > var, let, const

var person = "Budi"; // jarang dipakai lagi krn var  bisa dipakai berulang kali variable nya
                    // sehingga bakal susah untuk di debug atau pas maintenance susah 
let person2 = "Siti";

const person3 = "Joko";

person2 = "Budi2" // yang masuk ke variable person yang dieksekusi adalah yang terakhir
// alt + shift + arrow atas untuk copy atas / arrow bawah untuk copy bawah

// CTRL + K kemudian tekan Q

// ================ BIASAKAN PAKAI 'const' biar lebih clear, kecuali jika variable nya ingin diubah ubah maka baru gunakan 'let'

console.log(person);
console.log(person2);
console.log(person3);

// ================= VARIABLE NAMING
// RULES :
// - must contain only letters, digits, or symbol "$" and "_"
// - the first character must not digits
// - case sennnsitive

// ================= DATA TYPES (masuk materi ujian)
// primitive data types : string, numper, boolean, null, dan undefined
// non primitive data types : obbject dan array

// string -> "", '' (ex: "100", "Budi")
const setringg  = "100";
// number -> 1 2 3 4 100 200 
const nomorr = 20;
// boolean -> true & false
const inibool = true;
// null -> menandakan sebuah value itu masih osong dan belum diisi 
const ininull = null;
// undefined -> variable tidak ada isinya / kosong
const iniuden = undefined;

