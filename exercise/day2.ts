// ==============  NO 1 =================
// Check nomor ganjil atau genap
const angka: number = 25;

if (angka % 2) {
  console.log(`${angka} Merupakan bilangan  ganjil`);
} else if (angka == 0) {
  console.log(`${angka} Merupakan bilangan nol`);
} else {
  console.log(`${angka} Merupakan bilangan genap`);
}

//==============  NO 2 =================
//Check bilangan prima pakai for loop dimodulo sama i nya
const angkaPrima: number = 1;
let isPrima: boolean = true;

for (let i = 2; i < angkaPrima; i++) {
  // perulangan dan periksa dari 1 - N
  if (angkaPrima % i == 0) {
    // di modulo dari 2 sampai (N - 1)
    console.log(i);
    isPrima = false;
    break;
  }
}

if (isPrima && angkaPrima > 1) {
  console.log(`${angkaPrima} merupakan bilangan Prima`);
} else {
  console.log(`${angkaPrima} bukan merupakan bilangan prima`);
}

// ==============  NO 3 =================
// check penjumlahan dari 1 sampai N
let n: number = 5;
let jumlahN: number = 0;

for (let i = 1; i <= n; i++) {
  jumlahN = i + jumlahN;
  //   console.log(jumlahN);
}
console.log(`Penjumlahan dari 1 sampai ${n} adalah ${jumlahN}`);

// ==============  NO 4 =================
// Check bilangan faktorial
let m: number = 1;
let faktorialN: number = 1;
if (m > 0) {
  for (let i = 1; i <= m; i++) {
    faktorialN = i * faktorialN;
    //   console.log(faktorialN);
  }
  console.log(`Faktorial dari ${m} adalah ${faktorialN}`);
}

// ==============  NO 5 =================
// Check bilangan fibonacci
let l: number = 15;
let angkaKe1: number = 0;
let angkaKe2: number = 1;
let fibonacciKeN: number = 1;

if (l <= 1 && l > 0) {
  fibonacciKeN = 1;
} else if (l === 2) {
  fibonacciKeN = 1;
} else {
  for (let i = 2; i <= l; i++) {
    fibonacciKeN = angkaKe1 + angkaKe2; // rumus fibonacci yaitu angka ke N = hasil penjumlahan kedua angka sebelumnya
    angkaKe1 = angkaKe2; // angka ke1 diganti dengan angka ke 2
    angkaKe2 = fibonacciKeN; // angka ke2 diganti dengan angka ke N
  }
}
console.log(`Jadi angka fibonacci ke ${l} adalah ${fibonacciKeN}`);
