// 1. git add .
// 2. git commit -m "exercise day 3"
// 3. git push origin main

// ============== NO 1 ================
//
const input = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}

// ============== NO 2 =================
// cek kata apakah palindrome
const iPal: string = "kasur rusak";
let sPal = iPal.split("");
sPal = sPal.reverse();
const oPal = sPal.join("");

if (oPal == iPal){
    console.log("palindrome");
} else {
    console.log("bukan palindrome");
}

// ============== NO 3 =================
// convert centimeter ke kilometer
const cm: number = 10000;
console.log(`${cm} cm = ${cm / 10000} km`);

// ============== NO 4 =================
// format number as currency (IDR)
const numToCur: number = 100000000.1;
console.log(
  `${numToCur} = ${new Intl.NumberFormat("IDR", {
    style: "currency",
    currency: "IDR",
  }).format(numToCur)} `
);

// ============== NO 5 =================
// remove string yang  dicari misal "Hello world" search string = "ell" maka menjadi "Ho world"
let theString: string = "Hello world";
const findString: string = "ell";

theString = theString.replaceAll(findString, "");
console.log(theString);

// ============== NO 6 =================
// Capitalize each word
const inputCap: string = "hello world ya maaf saya kan maba";
let sCap = inputCap.split(" ");
let mergeCap: string;
for (let i = 0; i < sCap.length; i++) {
  if (sCap[i] != "") {
    sCap[i] = sCap[i][0].toUpperCase() + sCap[i].slice(1);
    // console.log(sCap);
  }
  mergeCap = sCap.join(" ");
}
console.log(mergeCap);

// console.log(sCap);
// let tesCap = sCap[1][0].toUpperCase();
// console.log(tesCap);

// ============== NO 7 =================
// swap the case each character
const inputCase: string = "The QuiCk BrOwN Fox";
let mergeCase: string = "";
for (let i = 0; i < inputCase.length; i++) {
  // if (sCase[i] != "") {
  let sCase = inputCase[i];
  if (sCase >= "a" && sCase <= "z") {
    mergeCase += sCase.toUpperCase();
  } else if (sCase >= "A" && sCase <= "Z") {
    mergeCase += sCase.toLowerCase();
  } else {
    mergeCase += sCase;
  }
  // inputCase[i] = inputCase[i].toUpperCase();
  // console.log(sCap);
  // }
  // sCase[i] =
}
console.log(mergeCase);

// ============== NO 8 =================
// mencari angka terbesar dari dua buah angka
const nomor1: number = 62;
const nomor2: number = 61;

if (nomor2 > nomor1) {
  console.log(`angka terbesar ${nomor2}`);
} else if (nomor2 === nomor1) {
  console.log(`angka tersebut sama`);
} else {
  console.log(`angka terbesar ${nomor1}`);
}

// ============== NO 9 =================
// mengurutkan 3 buah angka yang dimasukkan
const numA: number = 42;
const numB: number = 27;
const numC: number = 18;

if (numA < numB && numA < numC) {
  if (numB < numC) {
    console.log(`${numA}, ${numB}, ${numC}`);
  } else if (numC < numB) {
    console.log(`${numA}, ${numC}, ${numB}`);
  }
} else if (numB < numA && numB < numC) {
  if (numA < numC) {
    console.log(`${numB}, ${numA}, ${numC}`);
  } else if (numC < numA) {
    console.log(`${numB}, ${numC}, ${numA}`);
  }
} else if (numC < numA && numC < numB) {
  if (numA < numB) {
    console.log(`${numC}, ${numA}, ${numB}`);
  } else if (numB < numA) {
    console.log(`${numC}, ${numB}, ${numA}`);
  }
}

// ============== NO 10 =================
// mengecek tipe data yang di inputkan
const inputan = "hello";
if (typeof inputan == "string") {
  console.log(1);
} else if (typeof inputan == "number") {
  console.log(2);
} else {
  console.log(3);
}

// ============== NO 11 =================
// mengubah semua a menjadi *
let kalimat: string = "An apple a day keeps the doctor away".toLowerCase();
// kalimat = kalimat.replaceAll("A", "*");
kalimat = kalimat.replaceAll("a", "*");
console.log(kalimat);
