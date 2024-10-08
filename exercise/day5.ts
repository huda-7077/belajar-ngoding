// ============================= NO 1 ===============================
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
// With sort function
function sortHiLoAvWithSort(number: number[]) {
  const min: number = number.sort((a, b) => a - b)[0];
  const max: number = number.sort((a, b) => b - a)[0];
  let sum = 0;
  for (const element of number) {
    sum += element;
  }
  //   console.log(sum);

  const avg = sum / number.length;
  console.log(min);
  console.log(max);
  console.log(avg);

  return "lowest : " + min + " highest : " + max + ", average : " + avg;
}
console.log(sortHiLoAvWithSort([12, 5, 23, 18, 4, 45, 32]));

//without sort function
function sortHiLoAv(number: number[]) {
  const max: number = Math.max(...number);
  const min: number = Math.min(...number);
  const avg: number = number.reduce((a, b) => a + b) / number.length;
  console.log(max);
  console.log(min);
  console.log(avg);

  return number;
}
console.log(sortHiLoAv([12, 5, 23, 18, 4, 45, 32]));

// ============================= NO 2 ===============================
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
function arrayOfWords(arr: string[]) {
  let answer: string = "";
  console.log(arr);
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  const allWord = arr.slice(0, -1).join(",");
  const lastWord = arr[arr.length - 1];
  return `${allWord}, and ${lastWord}`;
}
console.log(arrayOfWords(["apple", "banana", "cherry", "date"]));

// ============================= NO 3 ===============================
// Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2
function secondSmallestNumber(number: number[]) {
  const min: number = number.sort((a, b) => a - b)[1];
  return min;
}
console.log(secondSmallestNumber([5, 3, 1, 7, 2, 6]));

// ============================= NO 4 ===============================
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
function calculateArray(numberA: number[], numberB: number[]) {
  const result: number[] = [];
  for (let i = 0; i < numberA.length; i++) {
    result[i] = numberA[i] + numberB[i];
  }
  return result;
}
console.log(calculateArray([1, 2, 3], [3, 2, 1]));

// ============================= NO 5 ===============================
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a.Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]
// b.Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]
function addElement(arr: number[], newElement: number) {
  const arrays: number[] = arr;
  const result = arrays.find((array) => array == newElement);
  if (result == newElement) {
    return arr;
  } else {
    return arr.concat(newElement);
  }
}

console.log(addElement([1, 2, 3, 4], 5));

// ============================= NO 1 ===============================
// Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
function sumAllNumber(input: any[]) {
  const temps = input.filter((temp) => typeof temp === "number");
  // console.log(temps);
  let sum = 0;
  for (const element of temps) {
    sum += element;
  }
  return sum;
}
// sumAllNumber(["3", 1, "string", null, false, undefined, 2]);
console.log(sumAllNumber(["3", 1, "string", null, false, undefined, 2]));

// ============================= NO 2 ===============================
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]
function createArray(maxSize: number, ...integer: number[]) {
  const result: number[] = integer.slice(0, maxSize);
  return result;
}
console.log(createArray(5, 5, 10, 24, 3, 6, 7, 8));

// ============================= NO 3 ===============================
// Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]
function combineTwoArray(arr1: number[], arr2: number[]) {
  const result: number[] = arr1.concat(arr2);
  return result;
}
console.log(combineTwoArray([1, 2, 4], [4, 5, 6]));

// ============================= NO 4 ===============================
// Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
function findDuplicateValue(arr: number[]) {
  const result: number[] = arr.filter(
    (a, b) => arr.indexOf(a) !== b && arr.lastIndexOf(a) === b // a = item, b = index, fungsi indexof untuk mengecek apakah nilai indexof sama dengan nilai index
  );
  return result;
}
console.log(findDuplicateValue([1, 2, 2, 2, 3, 3, 4, 5, 5, 7, 8]));

// ============================= NO 5 ===============================
// Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]
function findDifferenceValue(arr1: number[], arr2: number[]) {
  const mergeArray: number[] = arr1.concat(arr2);
  const result: number[] = mergeArray.filter(
    (a, b) => mergeArray.indexOf(a) === b && mergeArray.lastIndexOf(a) === b
  );
  console.log(mergeArray);

  return result;
}

console.log(findDifferenceValue([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// ============================= NO 1 ===============================
// Based on the array below write a function that will return primitive data types only.
// arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”];
function searchPrimitiveDataTypes(arr: any[]) {
  const result: any[] = arr.filter(
    (a) =>
      typeof a === "number" ||
      typeof a === "string" ||
      typeof a === "boolean" ||
      typeof a === "undefined" ||
      a === null
  );
  // const result: any[] = arr.filter((a)=> typeof(a) !== "object")
  console.log(result);
  return result;
}
console.log(
  searchPrimitiveDataTypes([1, [], undefined, {}, "string", {}, [], null, 1])
);

// ============================= NO 2 ===============================
// Write a function from the below array of number that will return sum of duplicate values.
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// The function will return 40
function sumDupli(arr: number[]) {
  const sameNumber: number[] = arr.filter(
    (a, b) => arr.indexOf(a) !== b && arr.lastIndexOf(a) === b // a = item, b = index, fungsi indexof untuk mengecek apakah nilai indexof sama dengan nilai index
  );
  console.log(sameNumber);
  const totalSameNumber: number[] = arr.filter(
    (a, b) => arr.indexOf(a) !== b // a = item, b = index, fungsi indexof untuk mengecek apakah nilai indexof sama dengan nilai index
  );
  console.log(totalSameNumber);
  const sumAll: number[] = sameNumber.concat(totalSameNumber);
  console.log(sumAll);
  const result: number = sumAll.reduce((a, b) => a + b);
  console.log(result);

  return result;
}

console.log(sumDupli([10, 20, 40, 10, 50, 30, 10, 60, 10, 60]));

// ============================= NO 3 ===============================
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
function gameRPS(argument: "rock" | "paper" | "scissor") {
  const random: number = Math.floor(Math.random() * 3);
  let argumentBot: string;
  console.log(random);
  switch (random) {
    case 0:
      argumentBot = "rock";
      break;
    case 1:
      argumentBot = "paper";
      break;
    case 2:
      argumentBot = "scissor";
      break;
  }
  console.log(argumentBot);

  if (argument === argumentBot) {
    return "Draw";
  } else if (
    (argument === "rock" && argumentBot === "scissor") ||
    (argument === "paper" && argumentBot === "rock") ||
    (argument === "scissor" && argumentBot === "paper")
  ) {
    return "Win";
  } else {
    return "Lose";
  }

  // return argument;
}
console.log(gameRPS("paper"));
