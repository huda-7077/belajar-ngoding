// function mySqrt(x: number): number {
//   if (x === 0 || x === 1) return x;
//   for (let i = 0; i <= x * 0.5; i++) {
//     if (i * i <= x && (i + 1) * (i + 1) > x) return i;
//   }
// }
// console.log(mySqrt(1));

// function isPalindrome(x: number): boolean {
//   const y: string = x.toString().split("").join("");
//   const z: string = x.toString().split("").reverse().join("");
//   console.log(y);
//   console.log(z);
//   return y === z ? true : false;
// }
// console.log(isPalindrome(121));

// function lengthOfLastWord(s: string): number {
//   const temp: string[] = s.trim().split(" ");
//   temp[temp.length - 1];
//   console.log(temp[temp.length - 1]);
//   return temp[temp.length - 1].length;
// }
// console.log(lengthOfLastWord("hello World   "));

// type JSONValue =
//   | null
//   | boolean
//   | number
//   | string
//   | JSONValue[]
//   | { [key: string]: JSONValue };

// function argumentsLength(...args: JSONValue[]): number {
//   return args.length;
// }

// console.log(argumentsLength([5])); // 3

// function reverseWords(s: string): string {
//   return s
//     .split(" ")
//     .filter((word) => word)
//     .reverse()
//     .join(" ");
// }

// console.log(reverseWords("the sky is blue"));

// function toLowerCase(s: string): string {
//   return s.toLowerCase();
// }
// console.log(toLowerCase("Hello"));

// function sortArrayByParity(nums: number[]): number[] {
//   return nums
//     .filter((number) => number % 2 === 0)
//     .concat(nums.filter((number) => number % 2 !== 0));
// }
// console.log(sortArrayByParity([3, 1, 2, 4, 5, 6, 8]));

// function createHelloWorld() {
//   return function (...args): string {
//     return "Hello World";
//   };
// }
// const f = createHelloWorld();
// console.log(f());

// function createCounter(n: number): () => number {

//     return function() {
//     return n++
//     }
// }

//  const counter = createCounter(10)
//  console.log(counter()) // 10
//  console.log(counter()) // 11
//  console.log(counter()) // 12

// function scoreOfString(s: string): number {
//     // const temp = s.charCodeAt(0)
//     // console.log(temp);
//     let result: number = 0;
//     for(let i = 0; i < s.length-1; i++){
//         result += Math.abs(s.toLowerCase().charCodeAt(i) - s.charCodeAt(i + 1));

//     }
// console.log(result);
// return result;

// };
// console.log(scoreOfString("zaz"));

// type Counter = {
//   increment: () => number;
//   decrement: () => number;
//   reset: () => number;
// };

// function createCounter(init: number): Counter {
//   let count = init;
//   return {
//     increment() {
//       return ++count;
//     },
//     decrement() {
//       return --count;
//     },
//     reset() {
//       return count = init;
//     },
//   };
// }

// const counter = createCounter(5);
// console.log(counter.increment()); // 6
// console.log(counter.increment()); // 6
// console.log(counter.increment()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4
// console.log(counter.decrement()); // 4
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4
// console.log(counter.decrement()); // 4

// function reverse(x: number): number {
//   let result: number = 0;
//   if (x < 0) {
//     result = -parseInt(x.toString().split("").reverse().join(""));
//   }
//   else {result = parseInt(x.toString().split("").reverse().join(""))};
//   if (result >= (-2) ** 31 && result < 2 ** 31) {
//     return result;
//   }
//   return 0;
// }

// console.log(reverse(-15));

//  Definition for singly-linked list.
//  class ListNode {
//      val: number
//      next: ListNode | null
//      constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//      }
// //  }
// function mergeTwoLists(list1: number[] | null, list2: number[] | null): number[] | null {
//     const temp:number[] = [...list1].splice(...list2,1);
//     console.log(temp);
//     return temp;

// };
// console.log(mergeTwoLists([1,2,4],[1,3,4]));

// function divide(dividend: number, divisor: number): number {
//   if (dividend === 0 || divisor === 0) return 0;
//   if (dividend <= (-2) ** 31) dividend = (-2) ** 31;
//   if (dividend >= 2 ** 31 - 1) dividend = 2 ** 31 - 1;
//   if (divisor <= (-2) ** 31) divisor = (-2) ** 31;
//   if (divisor >= 2 ** 31 - 1) divisor = 2 ** 31 - 1;

//   if (
//     (dividend || divisor) >= (-2) ** 31 &&
//     (dividend || divisor) <= 2 ** 31 - 1
//   ) {
//     if (dividend / divisor === 2 ** 31) return 2 ** 31 - 1;
//     if (dividend / divisor < 0) return Math.ceil(dividend / divisor);
//     return Math.floor(dividend / divisor);
//   }
// }
// console.log(divide(10, 3));

// function myPow(x: number, n: number): number {
//     return x ** n
// };

// console.log(myPow(2.1,3));

// function subtractProductAndSum(n: number): number {
//     const product = n.toString().split("").map(a => parseInt(a)).reduce((a,b) => a*b);
//     const sum = n.toString().split("").map(a => parseInt(a)).reduce((a,b) => a+b);
//     return product - sum;

// };
// console.log(subtractProductAndSum(234));

// function isPerfectSquare(num: number): boolean {
//     if (num === 1) return true;
//     for (let i = 1; i <= num ; i++){
//         if (i * i === num) return true;
//     }
//     return false;
// };
// console.log(isPerfectSquare(1));

function removeDuplicates(nums: number[]): number {
  const result: number[] = nums.filter((a,b )=> nums.indexOf(a) !== b && nums.lastIndexOf(a) === b && nums.indexOf(a) === b)
  console.log(result);
  return result.length;
  // just try;
}

console.log(removeDuplicates([1,1, 1, 2]));
// function removeDuplicates(nums: number[]): nsumber {
//   const arr1: number[] = nums.filter(
//     (a, b) => nums.indexOf(a) !== b && nums.lastIndexOf(a) === b
//   );
//   const arr2: number[] = nums.filter(
//     (a, b) => nums.indexOf(a) === b && nums.lastIndexOf(a) === b
//   );
//   const result = arr1.concat(arr2).sort();
//   console.log(result);//   return result.length;
// }

// console.log(removeDuplicates([1, 1, 2]));
