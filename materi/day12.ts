// // PROMISE & ASYNY AWAIT

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Data berhasil diambil");
//       } else {
//         reject("Terjadi Kesalahan!");
//       }
//     }, 2000);
//   });
// }

// // promise / tanpa async await

// fetchData()
//   .then((data) => {
//     console.log(data);

//     return "ssdasar";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise selesai");
//   });

// // menggunakan async await
// const getData = async () => {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData();

// // async function getData2() {}

// // tanpa async await
// const fetchData2 = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// fetchData2();

// // menggunakan async await
// const fetchData3 = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     // throw "Ini Error"; // create error
//     throw new Error("Ini error buatanku"); // create error
//     console.log(users);
//     return users;
//   } catch (error) {
//     if (error instanceof Error){
//         console.log(error.message); 
//     }
//     // console.log(error);
//   }
// };

// fetchData3();

// JSON -> javascript object notation
const user ={name: "budi", age: 40};

const userJSON =JSON.stringify(user); // js object to JSON

console.log(userJSON);

const parseJSON = JSON.parse(userJSON); // JSON to js object

console.log(parseJSON);

// Modules
import {myFunc, name} from "./test";
myFunc();
console.log(name);

// HOISTING -> var & func declaration 

// func expression
// testFunctionExpression(); // gak bakalan bisa dipanggil sebelum penulisan function
const testFunctionExpression = () => {};

// func declaration

testFunctionDeclaration(); // ini bisa di panggil sebelum penulisan function
function testFunctionDeclaration(){}