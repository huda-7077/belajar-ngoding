// 1. git add .
// 2. git commit -m "exercise day 3"
// 3. git push origin main

// No 1
// const angka: number = 9;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${angka} x ${i} = ${angka * i}`);
// }

// No 2
// Cara 1 (build in method)
// const kata: string = "car";
// const isPalindrome: boolean = kata === kata.split("").reverse().join("");
// console.log(isPalindrome);

// Cara 2 (tanpa build in method)
// const kata: string = "madam";
// let reverse: string = "";

// for (let i = kata.length - 1; i >= 0; i--) {
//   reverse += kata[i];
// }

// console.log(kata === reverse ? true : false);

// No 3
// const cm: number = 100_000;
// const km: number = cm / 100_000;

// console.log(km + " km");

// No 4
// const harga: number = 10_000;
// const result: string = new Intl.NumberFormat("id-ID", {
//   style: "currency",
//   currency: "IDR",
//   maximumFractionDigits: 0,
// }).format(harga);

// console.log(result);

// No 5
// const kata: string = "Hello World";
// const search: string = "ell";
// const result: string = kata.replace(search, "");

// console.log(result);

// No 6

// const inputString: string = "hello world";
// const words: string[] = inputString.split(" ");

// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }

// console.log(words.join(" "));

// No 7
// const inputString: string = "The QuiCk BrOwN Fox";
// let swappedString: string = "";

// for (let i = 0; i < inputString.length; i++) {
//   const char: string = inputString[i];

//   if (char === inputString[i].toUpperCase()) {
//     swappedString += char.toLowerCase();
//   } else {
//     swappedString += char.toUpperCase();
//   }
// }

// console.log(swappedString);

// No 8
// const num1: number = 10;
// const num2: number = 27;

// console.log(num1 > num2 ? num1 : num2);

// No 9
// const num1: number = 42;
// const num2: number = 27;
// const num3: number = 18;

// const smallest: number = Math.min(num1, num2, num3);
// const largest: number = Math.max(num1, num2, num3);
// const middle: number = num1 + num2 + num3 - smallest - largest;

// console.log(`${smallest} ${middle} ${largest}`);

// No 10
// const input: any = "";

// if (typeof input === "string") {
//   console.log(1);
// } else if (typeof input === "number") {
//   console.log(2);
// } else {
//   console.log(3);
// }

// No 11

const inputString: string =
  "An apple a day keeps the doctor away".toLowerCase();
const replaceWord: string = "a".toLowerCase();
let modifiedString: string = "";

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === replaceWord) {
    modifiedString += "*";
  } else {
    modifiedString += inputString[i];
  }
}

console.log(modifiedString);