// ================ ARRAY ================

// const arr = []; // cara ke 1
// const arr2 = new Array(); // cara ke 2

const arr: string[] = ["A", "B", "C"];
const arr2: string[] = new Array("A", "B", "C");

const arr3: number[] = [1, 2, 3, 4];
const arr4: number[] = new Array(1, 2, 3, 4);

// ====== ARRAY OF OBJECT ======
// ===== PASCAL CASE =====
// const student: { name: string; email: string }[] = [
//   { name: "budi", email: "budi@mail.com" },
//   { name: "siti", email: "siti@mail.com" },
//   { name: "joko", email: "joko@mail.com" },
//   { name: "jono", email: "jono@mail.com" },
// ];

// ===== SINGULAR ====       // FITUR TAMBAHAN DI TYPESCRIPT
interface Student {
  name: string;
  email: string;
  hobby?: string; // OPTIONAL BISA ADA BISA NGGAK
  address?: Address; // ADD interface address ke array student (ARRAY DALAM ARRAY)
}
//        BISA PILIH SALAH SATU ANTARA TYPE ATAUPUN INTERFACE
// type Student = {
//   name: string;
//   email: string;
// };
interface Address {
  street: string;
  city: string;
}
const student: Student[] = [
  { name: "budi", email: "budi@mail.com", hobby: "Futsal" }, // hobby bisa diisi bisa tidak di interface diberi "?"
  {
    name: "siti",
    email: "siti@mail.com",
    address: { street: "Jalan xyz", city: "xyz" },
  },
  { name: "joko", email: "joko@mail.com" },
  { name: "jono", email: "jono@mail.com" },
];

// =============== FOR OF ===============
const fruits: string[] = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// ===== Exercise for of =====
// hitung jumlah semua bilangan dalam array menggunakan for of
// ex input = [1,2,3,4,5,6] -> 21

const numInputs: number[] = [1, 2, 3, 4, 5, 6];
let total: number = 0;
for (const numInput of numInputs) {
  total += numInput;
}
console.log(total);

// ================ FUNCTION ================
// ada 2 cara untuk menuliskan fungsi
// 1. function declaration
// 2. function expression

// ====== FUNCTION DECLARATION ======
function square(number: number) {
  // yang didalem kurung itu namanya parameter (harus diberi tipe data)
  return number * number;
}
const result = square(4); // -> angka 4 (yang didalem kurung) itu argument
const result2 = square(10);
console.log(result);
console.log(result2);

// ====== FUNCTION EXPRESSION ======
const square1 = function (number: number) {
  // function expression perlu memasukkan function ke sebuah variabel
  return number * number;
};

const result3 = square1(4);
const result4 = square1(10);

console.log(result3);
console.log(result4);

// ========= FUNCTION SCOPE =========
// variable yang di define di dalam function hanya bisa diakses di dalam function tersebut
// jadi fungsi ini hanya bisa diakses di function tersebut

function greeting() {
  const hello = "Hello";
  console.log(hello); // ini yang bisa
  return hello;
}
greeting(); //  ini functionnya harus dipanggil terlebih dahulu sehingga console log yang didalam
//              function dapat diakses
// console.log(hello); // ini nggak bakal bisa diakses

// ================== PARAMETER & ARGUMENT ===================
// Parameter -> variable yang mewakili value dari argument yang dimasukkan
// Argument  -> value yang dimasukkan saat pemanggilan function

function greeting1(name: string) {
  const hello = "Hello";
  console.log(hello); // ini yang bisa
  return hello + " " + name;
}

console.log(greeting1("BEJO"));
console.log(greeting1("Joko"));
console.log(greeting1("Siti"));

// ================ DEFAULT PARAMETER ======================
// default parameter yaitu yang (b: number = 1) jadi jika nanti pas functionnya tidak diisi
// maka nilai yang otomatis muncul adalah 1
function multiply(a: number, b: number = 1) {
  console.log(a);
  console.log(b);
  return a * b;
}
console.log(multiply(5)); // contoh yang menggunakan parameter default
console.log(multiply(5, 70));
// PARAMETER DEFAULT HANYA BISA UNTUK VARIABLE PARAMETER YANG BELAKANG KARENA JIKA YANG DEPAN MAKA AKAN ERROR

// ================ REST PARAMETER =======================
// Mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ================= NESTED FUNCTION ======================
// function yang berada di dalam function
// INNER function bisa akses parameter dari outer function
// OUTER function tidak bisa akses parameter dari inner function

// outer function
function getMessage(firstName: string) {
  // inner function 1
  function sayHello() {
    return "Hello " + firstName + ","; // ini contoh inner function manggil parameter outer function
  }
  // innner function 2
  function welcomeMessage() {
    return "Welcome to Purwadhika";
  }
  return sayHello() + " " + welcomeMessage(); // HANYA BOLEH RETURN 1 KALI
}
console.log(getMessage("Budi"));
// console.log(sayHello("Siti")); // INNER FUNCTION TIDAK DAPAT DIAKSES diluar OUTER FUNCTION karena adanya FUNCTION SCOPE


// ================= CLOSURE ================================
// Inner function selalu mempunyai akses ke variable dan parameter dari outer function
// bahkan setelah function tersebut di return

function greeting2(name: string) {
  const defaultMessage: string = "Hello";
  return function () {
    return defaultMessage + " " + name;
  };
}
const result5 = greeting2("Budi");
console.log(result5());


// =================== RECURSIVE ==========================
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

// console.log();


// =================== ARROW FUNCTION ======================
// shortcut untuk menuliskan function expression

// contoh function expression
const square2 = function (number: number) {
  return number * number;
};

// contoh jika diubah ke arrow function
const square3 = (number: number) => {
  return number * number;
};
console.log(square3(10));

// kalo misalnya cuma 1 line bisa dibikin seperti ini
const square4 = (number: number) => number * number;

// ================ ARRAY BUILD IN METHOD =================
// JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
const words: string[] = ["Hello", "World"];
console.log(words.join(" "));

// POP -> menghilangkan isi value paling akhir dalam array
const words2: string[] = ["Hello", "World", "Hello"];
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan array
const words3: string[] = ["Test", "Hello", "World"];
words3.shift();
console.log(words3);

// PUSH -> menambahkan value ke dalam array di paling akhir
const words4: string[] = ["Hello", "World"];
words4.push("Purwadhika");
console.log(words4);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words5: string[] = ["Hello", "World"];
words5.unshift("Jogja");
console.log(words5);

// CONCAT -> menggabungkan 2 array menjadi 1 array
const array1: string[] = ["Hello"];
const array2: string[] = ["World"];
const array3: string[] = ["Jogja", "Super"];

console.log(array1.concat(array2));
console.log(array2.concat(array1).concat(array3));

// another option
const mergeArr = [...array1, ...array2, ...array3]; // ... -> spread operator
console.log(mergeArr);

// SPLICE -> untuk menghapus, mengganti, atu menambahkan value pada sebuah array
// rumus -> splice(startIndex, berapaYgMauDiDelete, item)

const months: string[] = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb"); // Menambahkan value pada index 1
console.log(months);

months.splice(4, 1); // Menghapus value pada index 4
console.log(months);

months.splice(3, 1, "May"); // Mengganti value pada index 3
console.log(months);

// SLICE -> mereturn array baru dengan value yang sudah ditentukan oleh index start dan index end dari array tersebut
// rumus -> slice(startIndex, endIndex)

const fruits1: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];
console.log(fruits1.slice(1, 4)); // dari depan
console.log(fruits1.slice(-4, -1)); // dari belakang

// INDEXOF -> mencari index dari value yang kita search
// kalau tidak ditemukan akan me return -1

const fruits2: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];
console.log(fruits2.indexOf("Lemon"));
console.log(fruits2.indexOf("Lemonn")); // kalau tidak ketemu akan return -1

// SORT -> mengurutkan isi array berupa string atau number
// versi string
const fruits3: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];
console.log(fruits3.sort());
console.log(fruits3.reverse());

// versi number tanpa compare function
const number1: number[] = [3, 5, 1, 9, 6, 2];
number1.sort();
console.log(number1);

// versi number menggunakan compare function
const number2: number[] = [3, 5, 1, 9, 6, 20];
number2.sort((a, b) => a - b); // asc (kecil ke besar)
// number2.sort((a, b) => b - a); // desc (kecil ke besar)
console.log(number2);

// REVERSE -> membalikkan urutan element dalam array
const number3: number[] = [3, 5, 1, 9, 6, 20];
number3.reverse();
console.log(number3);

// FOREACH -> melakukan looping pada array tapi tidak me-return apapun
const fruits4: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];
fruits4.forEach((fruit, index) => {
  console.log(index);
  console.log(fruit);
});

// MAP -> melakukan looping sama seperti forEach tapi dapat me return array baru
const fruits5: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];
const result6 = fruits5.map((fruit, index) => {
    return fruit;
});
console.log(result6);

// FILTER -> melakukan looping juga sama seperti map dan menghasilkan array baru berdasarkan kondisi pada return function
const ages: number[] = [32, 15, 29, 21, 40];
const result7 = ages.filter((age) => {
  return age > 17;
});
console.log(result7);

// FIND -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [3, 15, 29, 15, 40];
const result8 = ages2.find((age) => age > 14);
console.log(result8);

// FINDINDEX -> mirip seperti find tapi yang dihasilkan adalah indexnya
const ages3: number[] = [3, 15, 29, 15, 40];
const result9 = ages3.findIndex((age) => age > 14);
console.log(result9);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers1: number[] = [175, 50, 25, 50];
const result10 = numbers1.reduce((a, b) => a + b);
console.log(result10);

// INCLUDES -> mengecek value pada array ada atau tidak.
// hasil return adalah boolean
const fruits6: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];

console.log(fruits6.includes("Apple"));
