// No 1
const checkObjectEqual = (obj1: any, obj2: any) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  };
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 1 };
  console.log(checkObjectEqual(obj1, obj2));
  
  // No 2
  const intersection = (obj1: any, obj2: any) => {
    let duplicate = {};
  
    for (const key in obj1) {
      if (obj1[key] === obj2[key]) {
        duplicate[key] = obj1[key];
      }
    }
  
    return duplicate;
  };
  
  const obj3 = { a: 1, b: 2, c: 10 };
  const obj4 = { a: 1, b: 2, c: 1 };
  console.log(intersection(obj3, obj4));
  
  // No 3
  interface Student {
    name: string;
    email: string;
  }
  
  const combineArray = (arr1: Student[], arr2: Student[]) => {
    const combineArray = [...arr1, ...arr2];
    const temp: Student[] = [];
  
    for (let i = 0; i < combineArray.length; i++) {
      const existingStudent = temp.find(
        (value) => value.email === combineArray[i].email
      );
  
      if (!existingStudent) {
        temp.push(combineArray[i]);
      }
    }
  
    return temp;
  };
  
  const array1: Student[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
  ];
  const array2: Student[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
  ];
  
  console.log(combineArray(array1, array2));
  
  // No 4
  
  const switchKeyToValue = (data: any[]) => {
    const result: any[] = [];
  
    data.forEach((item) => {
      let temp: any = {};
  
      for (let key in item) {
        temp[item[key]] = key;
      }
  
      result.push(temp);
    });
  
    return result;
  };
  
  console.log(
    switchKeyToValue([
      { name: "David", age: 20 },
      { name: "David", age: 20 },
    ])
  );
  
  // No 5
  const factorial = (n: number) => {
    if (n === 1) {
      return {
        steps: [1],
        total: 1,
      };
    } else {
      const next = factorial(n - 1);
      console.log(next);
  
      return {
        steps: [n, ...next.steps],
        total: n * next.total,
      };
    }
  };
  
  const { steps, total } = factorial(5);
  console.log(steps.join(" x ") + " = " + total);