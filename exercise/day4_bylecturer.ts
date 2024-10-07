// No 1
function segitiga1(height: number) {
    for (let i = 1; i <= height; i++) {
      let row: string = "";
  
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
  
      console.log(row);
    }
  }
  
  // segitiga1(10);
  
  // No 2
  function segitiga2(height: number) {
    let currentNumber: number = 1;
    //   let result: string = "";
    for (let i = 1; i <= height; i++) {
      let row: string = "";
  
      for (let j = 1; j <= i; j++) {
        row += (currentNumber < 10 ? "0" : "") + currentNumber + " ";
        currentNumber++;
      }
      console.log(row);
      // result += row + "\n";
    }
    //   return result;
  }
  segitiga2(5);
  // console.log(segitiga2(5));
  
  // No 3
  function fizzBuzz(n: number) {
    let message: string = "";
  
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        message += "FizzBuzz" + " ";
      } else if (i % 5 === 0) {
        message += "Buzz" + " ";
      } else if (i % 3 === 0) {
        message += "Fizz" + " ";
      } else {
        message += i + " ";
      }
    }
  
    console.log(message);
  }
  
  fizzBuzz(15);
  
  // No 4
  
  function bmi(weight: number, height: number) {
    const result = weight / (height * height);
  
    if (result < 18.5) {
      return "less weight";
    } else if (result >= 18.5 && result <= 24.9) {
      return "ideal";
    } else if (result >= 25.0 && result <= 29.9) {
      return "overweight";
    } else if (result >= 30.0 && result <= 39.9) {
      return "very overweight";
    } else {
      return "obesity";
    }
  }
  
  const weight: number = 70; // in kg
  const height: number = 1.75; // in meters
  
  console.log(bmi(weight, height));
  
  // No 5
  // cara 1
  function removeOddNumber1(numbers: number[]) {
    return numbers.filter((number) => number % 2 === 0);
  }
  
  console.log(removeOddNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  // cara 2
  function removeOddNumber2(numbers: number[]) {
    const temp: number[] = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        temp.push(numbers[i]);
      }
    }
  
    return temp;
  }
  console.log(removeOddNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  // No 6
  
  const splitString = (input: string) => {
    const kata: string[] = [];
    let tempStr: string = "";
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        kata.push(tempStr);
        tempStr = "";
        continue;
      }
  
      tempStr += input[i];
    }
  
    kata.push(tempStr);
  
    console.log(kata);
  };
  
  splitString("Hello World");
  
  // tempStr = 'Hello'
  // tempStr = ''
  
  // ("Hello World");
  
  // ["Hello"]