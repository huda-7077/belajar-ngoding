// EMPLOYEE SALARY ====================================================================================
//  Specifications :
//  ○ Create a program to calculate total salary based on employee type
//  ○ There are two types of employee : full-time & part-time
//  ○ Salary for full-time employee :
//  ■ IDR 100.000 / hour
//  ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
//  ○ Salary for part-time employee :
//  ■ IDR 50.000 / hour
//  ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
//  Requirements :
//  ○ Create an Employee as a parent class
//  ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
//  ■ Create a method in that class to add working hour per day
//  ■ Create a method in that class to calculate total salary
//  ○ Use inheritance concept

class Employee {
  workingHour: number;
  name: string;
  gender: string;
  constructor(name: string, gender: string) {
    this.workingHour = 0;
    this.name = name;
    this.gender = gender;
  }
}

class FulltimeEmployee extends Employee {
  normalSalary: number;
  ovtSalary: number;
  constructor(name: string, gender: string) {
    super(name, gender);
    this.normalSalary = 100_000;
    this.ovtSalary = 75_000;
  }
  addWorkingHour(hour: number) {
    this.workingHour += hour;
  }
  totalSallary() {
    if (this.workingHour <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        normalSallary:
          "Rp " +
          (this.normalSalary * this.workingHour).toLocaleString("id-ID"),
        overTimeSalary: "Rp " + (0).toLocaleString("id-ID"),
        totalSalary:
          "Rp " +
          (this.workingHour * this.normalSalary).toLocaleString("id-ID"),
      };
    } else {
      let jamLembur: number = 0;
      jamLembur = this.workingHour - 6;
      const total = jamLembur * this.ovtSalary + this.normalSalary * 6;
      return {
        name: this.name,
        gender: this.gender,
        normalSalary: "Rp " + (this.normalSalary * 6).toLocaleString("id-ID"),
        overTimeSalary:
          "Rp " + (this.ovtSalary * jamLembur).toLocaleString("id-ID"),
        totalSalary: "Rp " + total.toLocaleString("id-ID"),
      };
    }
  }
}

class ParttimeEmployee extends Employee {
  normalSalary: number;
  ovtSalary: number;
  constructor(name: string, gender: string) {
    super(name, gender);
    this.normalSalary = 50_000;
    this.ovtSalary = 30_000;
  }
  addWorkingHour(hour: number) {
    this.workingHour += hour;
  }
  totalSallary() {
    if (this.workingHour <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        normalSallary:
          "Rp " +
          (this.normalSalary * this.workingHour).toLocaleString("id-ID"),
        overTimeSalary: "Rp " + (0).toLocaleString("id-ID"),
        totalSalary:
          "Rp " +
          (this.workingHour * this.normalSalary).toLocaleString("id-ID"),
      };
    } else {
      let jamLembur: number = 0;
      jamLembur = this.workingHour - 6;
      const total = jamLembur * this.ovtSalary + this.normalSalary * 6;
      return {
        name: this.name,
        gender: this.gender,
        normalSalary: "Rp " + (this.normalSalary * 6).toLocaleString("id-ID"),
        overTimeSalary:
          "Rp " + (this.ovtSalary * jamLembur).toLocaleString("id-ID"),
        totalSalary: "Rp " + total.toLocaleString("id-ID"),
      };
    }
  }
}

const andi = new FulltimeEmployee("Andi", "Male");
const jack = new FulltimeEmployee("Jack", "Male");
const huda = new ParttimeEmployee("Huda", "Male");
andi.addWorkingHour(4);
// console.log(huda.addWorkingHour(2));
huda.addWorkingHour(2);
// console.log(andi.addWorkingHour(4));
andi.addWorkingHour(1);
andi.addWorkingHour(3);
jack.addWorkingHour(7);

console.log(huda.totalSallary());
console.log(jack.totalSallary());
console.log(andi.totalSallary());

