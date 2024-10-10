// NO 1 ========================================================================
// create function to check if 2 object are equal
const objectOne = { a: "Hello" };
const objectTwo = { b: 1 };

function checkEqual(object: any, object2: any) {
  return object.a === object2.a ? "true" : "false";
}
console.log(checkEqual(objectOne, objectTwo));

// NO 2 ========================================================================
// get the intersection of two objects

const inputA = { a: 1, b: 2 };
const inputB = { a: 1, c: 3 };

interface Object {
  a?: number;
  b?: number;
  c?: number;
}

function getTheIntersection(object: Object, object2: Object) {
  const result: Object = {};

  for (let key in object) {
    if (object2.hasOwnProperty(key) && object[key] === object2[key]) {
      result[key] = object[key];
    }
  }
  console.log(result);

  return result;
}
console.log(getTheIntersection(inputA, inputB));

// NO 3 =======================================================================
// Merge two array of student and remove duplicate data
const data: any[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const data2: any[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
  { name: "Student 5", email: "student2@mail.com" },
];

function mergeTwoArray(array: any[], array2: any[]) {
  const mergedArray = array.concat(
    array2.filter((item2) => !array.some((item1) => item1.email === item2.email))
  );

  return mergedArray;
}
console.log(mergeTwoArray(data, data2));

// NO 4 =======================================================================
// Swap between key & value of object
const input: any[] = [
  { name: "David", age: 20 },
  { name: "Daud", age: 29 },
];

function swapKeyValue(input: any[]) {
  let temp: any[] = [];
  for (let i = 0; i < input.length; i++) {
    temp[i] = Object.fromEntries(
      Object.entries(input[i]).map(([k, v]) => [v, k])
    );
  }
  return temp;
}
console.log(swapKeyValue(input));

// NO 5 =======================================================================
// Faktorial using recursion
const inputN: number = 5;

const findFactorial = (input: number) => {
  const factorialOf = (n: number) => {
    if (n === 0) return 1;
    return n * factorialOf(n - 1);
  };
  // console.log(factorialOf(inputN));
  let message: string = "";
  for (let i = input; i > 0; i--) {
    if (i === 1) {
      message += i + " ";
    } else {
      message += i + " x ";
    }
  }
  // console.log(message);
  const result: string = `${input}! = ${message} = ${factorialOf(input)}`;
  return result;
};
console.log(findFactorial(inputN));
