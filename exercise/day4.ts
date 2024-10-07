// ============== NO 1 ================
// Buat triangle pattern
function triangleHeight(height: number) {
  let triangle = 1;
  let result: string = "";
  for (let i = 1; i <= height; i++) {
    let trianglePattern = "";
    for (let j = 1; j <= i; j++) {
      trianglePattern += triangle.toString().padStart(2, "0") + " ";
      triangle++;
    }
    console.log(trianglePattern);
    // return trianglePattern.trim()
    result = result + trianglePattern.trim() + "\n";
  }
  return result.trim();
}
console.log(triangleHeight(9));

// console.log(triangleHeight(9).split('\n'));

// ============== NO 2 ================
//  multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
function checkFizzBuzz(number: number) {
  const input: number = number;
  let fizzbuzz: string[] = [];
  for (let i = 0; i < input; i++) {
    // const element = fizzbuzz[i];
    let count: number = i + 1;
    if (count % 3 === 0 && count % 5 === 0) {
      fizzbuzz[i] = "FizzBuzz";
    } else if (count % 5 === 0) {
      fizzbuzz[i] = "Buzz";
    } else if (count % 3 === 0) {
      fizzbuzz[i] = "Fizz";
    } else {
      fizzbuzz[i] = count.toString();
    }
    console.log(fizzbuzz);
    // return fizzbuzz
  }
  console.log(fizzbuzz);
  return fizzbuzz.join(", ");
}
// checkFizzBuzz(15);
console.log(checkFizzBuzz(30));

// ============== NO 3 ================
// Body Mass Index (BMI)
// BMI = weight (kg) / (height (m) x height (m))
function checkBMI(weight: number, height: number) {
  const bmis: number = weight / (height * height);
  console.log(bmis);
  if (bmis < 18.5) {
    return "less weight";
  } else if (bmis >= 18.5 && bmis < 25) {
    return "ideal";
  } else if (bmis >= 25 && bmis < 30) {
    return "overweight";
  } else if (bmis >= 30 && bmis < 40) {
    return "very overweight";
  } else if (bmis >= 40) {
    return "obesity";
  }
}
console.log(checkBMI(51, 1.67));

// ============== NO 4 ================
// memfilter angka ganjil dan menampilkan angka genap saja di array
function even(...anyNumber) {
  const numbers: number[] = anyNumber.filter((number) => {
    // if (number % 2 === 0) {
    //   return number;
    // }
    return number % 2 === 0;
  });
  return numbers;
}
console.log(even(1, 2, 3, 4, 5, 6, 7, 10, 1, 4, 14, 1, 421, 4, 2));

// ============== NO 5 ================
// split string dan konversi menjadi array
function convert(words: string) {
  // const words1: string[] = words.trim().split(" ");
  const words1: string[] = words.split(" ").filter((word) => word); //truthy value jadi otomatis memfilter yang ada nilainya saja
  //   console.log(words1);
  return words1;
}

console.log(convert("    Hello   World"  ));
