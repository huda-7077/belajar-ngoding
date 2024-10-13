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
 
function scoreOfString(s: string): number {
    // const temp = s.charCodeAt(0)
    // console.log(temp);
    let result: number = 0;
    for(let i = 0; i < s.length-1; i++){
        result += Math.abs(s.toLowerCase().charCodeAt(i) - s.charCodeAt(i + 1));
       
    }
console.log(result);
return result;

    
};
console.log(scoreOfString("zaz"));
