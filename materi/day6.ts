// ========== CARA MENULISKAN OBJECT ==========
// ===== CARA 1 =====
const user = {};

// ===== CARA 2 =====
const user2 = new Object();

// ====================== PROPERTIES & METHOD ========================
interface User {
  name: string;
  greet: () => void;
  greet2: () => void;
  hobby?: string;
}

const user3: User = {
  name: "budi",
  greet() {
    console.log("Hello");
  },
  greet2: () => {
    console.log();
  },
};

// ======= ADD & DELETE PROPERTY =======
const person: any = {
  name: "joko",
  age: 20,
};

// ===== ADD PROPERTY =====
console.log(person);
// CARA 1
person.hobby = "Futsal"; // using dot
console.log(person);
// CARA 2
person["address"] = ["Jogja"]; // using square bracket
console.log(person);

// ==== DELETE PROPERTY ====
delete person.address;
console.log(person);

// ========== ACCESSING VALUE ==========
console.log(person.name); // using dot
console.log(person["hobby"]); // using square bracket

// ==== REPLACE VALUE ====
person.hobby = "badminton";
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));

// ============== IMMUTABLE & MUTABLE ===============
// mutable : variable yang bisa diubah datanya (primitive data types)
// immutable : object yang tidak bisa diubah saat sudah dibuat (non primitive data types)

// ==== MUTABLE ====
const count1: number = 4;
let count2: number = count1;
count2 = 10;
console.log(count1);
console.log(count2);

// ==== IMMUTABLE ====
let orang1: any = { name: "Budi" };
// let orang2: any = orang1;
let orang2: any = { ...orang1 }; // trik untuk mengakali immutable agar dapat menghasilkan value berbeda
orang2.age = 20;

console.log(orang1);
console.log(orang2);

// =============== OPTIONAL CHAINING =================
// const test = {
//     name:"Budi",
//     address: {
//         street: "Jl. Solo",
//         city: "xyz"
//     },
// }

const user4: any = {};
console.log(user4.address);

console.log(user4.address?.city);

// =============== FOR IN ===============
const person3 = {
  name: "aceng",
  age: 90,
};

for (const key in person3) {
  console.log(key);
  console.log(person3[key]);
}

// ============== DESTRUCTURING ASIGNMENT ====================
// mengeluarkan property dalam object menjadi sebuah variable

// VERSI DESTRUCT OBJECT
const person4 = {
  name: "aceng",
  age: 90,
  hobby: "main game",
};
console.log(person4.name);
console.log(person4.age);

// contoh destructuring, dapat membuat lebih rapih
const { name, age, hobby } = person4;
console.log(name);
console.log(age);
// console.log(hobby);

// VERSI DESTRUCT ARRAY
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = [10, 20];
console.log(a);
console.log(b);

// ======================= SPREAD OPERATOR =============================
// digunakan untuk copy isi object / menggabungkan object

const objectOne = { name: "jacky", password: "Admin123" };
const objectTwo = { email: "email@mail.com", name: "Pepeng" }; // properti name yang terakhir akan replace name yang awal

const result = { ...objectOne, ...objectTwo };
console.log(result);

// ======================= THIS KEYWORD ========================
// mengakses property lain di dalam sebuah  object

const person5 = {
  firstName: "aceng",
  lastName: "racing",
  greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  },
};
person5.greet();
// console.log(person5.greet);

// ======================== CLASS ======================
// template / cetakan untuk membuat sebuah object

// class declaration
class User1 {
  greeting() {
    console.log("Hello World!");
  }
}

// class expression
const User2 = class {
  greeting() {
    console.log("hello world!");
  }
};

// CREATE AN OBJECT FROMM CLASS
const human = new User1();
const human2 = new User1();
human2.greeting();
human.greeting();

// ======================== CONSTRUCTOR ======================
// method bawaan dari class yang akan dijalankan pertama kalo saaat kalian
// membuat object baru mennggunakan template class

class Person {
  name: string;
  #email: string;
  constructor(name: string, email: string) {
    this.name = name; // public
    this.#email = email; // private ke property
  }

  greeting() {
    console.log(`Hello ${this.name}`);
    return `Hello ${this.name}`;
  }
  // ACCESS MODIFIER -> public dan private
  // Method ini hanya bisa diaksses di dalam class ini saja (private ke method)
  private showEmail() {
    console.log(this.#email);
  }
  sendReminder() {
    return this.showEmail();
  }
}

const orang3 = new Person("Budi", "budi@mail.com");

console.log(orang3.name);
// orang3.showEmail();  // gak bakalan bisa karena showEmail adalah method private
// console.log(orang3.#email); // tidak bakalan bisa diakses karena email dibikin private

console.log(orang3.greeting());
console.log(orang3.sendReminder());

// ======================= GETTER & SETTER =====================
// get -> baca data
// set -> set value di dalam object

const orang4 = {
  firstName: "ujang",
  lastName: " recing",

  get fullName() {
    // bisa diisi logika sebelum melakukan get & set
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    // add more logic
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
  fullName2(value: string) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
};

console.log(orang4.fullName); // menggunakan getter
orang4.fullName = "Budi Joko"; // menggunakan setter
console.log(orang4.fullName);
orang4.fullName2("Jecky Siti"); // menggunakan method biasa
console.log(orang4.fullName);

// Kapan menggunakan Getter dan Setter?

// Getter berguna ketika ingin mendapatkan nilai properti, tetapi kamu ingin menambahkan logika
// misalnya format atau validasi.

// Setter berguna ketika ingin memvalidasi atau menambahkan logika sebelum menetapkan nilai ke properti

// Gunakan method biasa jika ingin tindakan lebih eksplisit atau jika fungsi tersebut melakukan
// lebih dari sekadar mengambil atau menetapkan nilai properti

// ================================ ENCAPSULATION ===================================
// konsep di OOP untuk nge bundle data dalam 1 unit.
// contohnya adalah class dan object

// ================================ INHERITANCE ================================
// Pewarisan dari parent class ke child class
// property dan method dari parent class bisa di akses oleh child class
// child bisa akses parent namun parent tidak dapat akses child

class Product {
  productName: string;
  price: number;
  constructor(name: string, price: number) {
    this.productName = name;
    this.price = price;
  }

  readPrice() {
    console.log(this.price);
    return "Rp " + this.price.toLocaleString("id-ID");
  }
}
// tidak menggunakan konsep inheritance
// class Book {
//   productName: string;
//   price: number;
//   author: string;
//   constructor(name: string, price: number, author: string) {
//     this.productName = name;
//     this.price = price;
//     this.author = author;
//   }
// }

// menggunakan konsep inheritance
class Book extends Product {
  author: string;
  constructor(name: string, price: number, author: string) {
    super(name, price);
    this.author = author;
  }
}

//example
const buku = new Book("Cara Jago Ngoding", 100_000, "Aceng");

console.log(buku.price);
console.log(buku.productName);
console.log(buku.author);
console.log(buku.readPrice());

// =============================== INSTANCE OF ==========================
// mengecek apakah sebuah object memiliki hubungan ke class tertentu

class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
