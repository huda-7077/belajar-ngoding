// No 1
const panjang: number = 5;
const lebar: number = 3;
const area: number = lebar * panjang;

console.log(area);

// NO 2
// const panjang: number = 5;
// const lebar: number = 3;
const perimeter: number = 2 * (panjang + lebar);

console.log(perimeter);

/// NO 3
const radius: number = 14;
const diameter: number = 2* radius;
const circumference: number = 2*3.14;
const circleArea: number = 3.14 * radius * radius;

console.log(`diameter: ${diameter}, circumference: ${circumference}, area: ${circleArea}`);

// NO 4
const a: number = 80;
const b: number = 65;
const c: number = 180 - (a + b);

console.log(`c: ${c}`);

// NO 5 
const hari: number = 400;
const tahun: number = Math.floor(hari/365);
const bulan: number = Math.floor((hari % 365) / 30);
const tanggal: number = Math.floor((hari % 365) % 30);

console.log(`${tahun} tahun, ${bulan} bulan, ${tanggal} hari`);

// NO 6
const date1: Date = new Date("2024-01-01");
const date2: Date = new Date("2024-01-10");
const bedaTanggal: number = Math.abs(date1.getTime() - date2.getTime());
const bedaHari: number = bedaTanggal / (1000 * 3600 * 24);

console.log(`perbedaan hari diantara kedua tanggal tersebut adalah ${bedaHari} hari`);




