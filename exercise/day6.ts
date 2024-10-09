// ==================== NO 1 ====================
// Calculate array of student data
class Student {
  name: string;
  email: string;
  age: Date;
  score: number;

  constructor(name: string, email: string, age: Date, score: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

class StudentStatistics {
  students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }

  getScores(): { highest: number; lowest: number; average: number } {
    const scores = this.students.map((student) => student.score);
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);
    const average = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
    return { highest, lowest, average };
  }

  getAges(): { highest: number; lowest: number; average: number } {
    const ages = this.students.map(
      (student) => new Date().getFullYear() - student.age.getFullYear()
    );
    const highest = Math.max(...ages);
    const lowest = Math.min(...ages);
    const average = ages.reduce((acc, curr) => acc + curr, 0) / ages.length;
    return { highest, lowest, average };
  }

  calculateStatistics(): {
    scores: { highest: number; lowest: number; average: number };
    ages: { highest: number; lowest: number; average: number };
  } {
    return {
      scores: this.getScores(),
      ages: this.getAges(),
    };
  }
}

// Example usage:
const students = [
  new Student("Joko", "joko@mail.com", new Date("2000-01-01"), 85),
  new Student("Siti", "siti@mail.com", new Date("1999-06-15"), 90),
  new Student("Jack", "jack@mail.com", new Date("2001-08-22"), 78),
];

const statistics = new StudentStatistics(students);
console.log(statistics.calculateStatistics());

// ==================== NO 2 ====================
// Create Transaction

class Product {
  productName: string;
  price: number;
  constructor(name: string, price: number) {
    this.productName = name;
    this.price = price;
  }

  readPrice() {
    console.log(this.price);
    return "Rp " + this.price.toLocaleString("id-ID");
  }
}

class Transaction {
  total: number;
  products: { product: Product; qty: number }[];
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addToCart(product: Product, qty: number) {
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal() {
    return "Rp " + this.total.toLocaleString("id-ID");
  }

  checkout() {
    const sumAllTx = {
      total: this.total,
      products: this.products.map((item) => ({
        name: item.product.productName,
        qty: item.qty,
        price: item.product.price,
      })),
    };
    return sumAllTx;
  }
}

const buku = new Product("Buku Cara Jago Ngoding", 100_000);
const lemari = new Product("Lemari Bagus", 400_000);

const transaction = new Transaction();
transaction.addToCart(buku, 4);
transaction.addToCart(lemari, 1);

console.log("Total: " + transaction.showTotal());

const checkoutTest = transaction.checkout();
console.log("Transaction Data:", checkoutTest);

console.log(buku.price);
console.log(buku.productName);
console.log(buku.readPrice());
