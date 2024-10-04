//NO 1
// const angka_: number = 10;
// No 1
const angka_: number = 10;

// if (angka % 2 === 0) {
//   console.log("genap");
// } else {
//   console.log("ganjil");
// }

console.log(angka_ % 2 === 0 ? "genap" : "ganjil");

// No 2
// const num: number = 6;
// let isPrime: boolean = true;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % 2 === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// console.log(isPrime);

// No 3
// CARA 1
// const number: number = 5;
// const result: number = (number * (number + 1)) / 2;
// console.log(result);

// CARA 2
// const angka1: number = 5;
// let sum: number = 0;
// let message: string = "";

// for (let i = 1; i <= angka1; i++) {
//   sum += i;

//   if (i === angka1) {
//     message += i + " ";
//   } else {
//     message += i + " + ";
//   }
// }

// console.log(sum);
// console.log(`${message} = ${sum}`);

// No 4

const num: number = 4;
let result: number = 1;
let message: string = "";

for (let i = num; i >= 1; i--) {
  result *= i;

  if (i === 1) {
    message += i + " ";
  } else {
    message += i + " x ";
  }
}

console.log(result);
console.log(`${message} = ${result}`);

// No 5
const n_: number = 1;

let a_: number = 0;
let b_: number = 1;

for (let i = 0; i < n_; i++) {
  let next: number = a_ + b_;
  a_ = b;
  b_ = next;
}

console.log(a_);
console.log(a_);