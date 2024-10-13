// NO 1 =================================================================================

class BankQueue {
  queue: any[];

  constructor() {
    this.queue = [];
  }

  enqueue(element: any) {
    return this.queue.push(element);
  }
  dequeue() {
    return this.queue.shift();
  }
  size() {
    return this.queue;
  }
}
const queue = new BankQueue();

console.log(queue.enqueue("aji"));
console.log(queue.enqueue("robot"));
console.log(queue.enqueue("jalu"));
console.log(queue.enqueue("jali"));
console.log(queue.enqueue("bagas"));
console.log(queue.enqueue("rehat"));
console.log(queue.enqueue("fufu"));
console.log(queue.enqueue("fafa"));

console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());

// NO 2 ============================================================================================

class Train {
  passenger: string[];
  masinis: string;
  maxCapacity: number;
  constructor() {
    this.passenger = [];
    this.masinis = "masinis";
    this.passenger[0] = this.masinis;
    this.maxCapacity = 11;
  }

  isFull() {
    return this.passenger.length >= this.maxCapacity;
  }

  isEmpty() {
    return this.passenger.length === 1;
  }

  showPassenger() {
    return this.passenger;
  }

  passengerIn(name: string) {
    if (name === "masinis") return `${name} already exists`
    if (this.passenger.includes(name)){
      return "passenger already exists"
    }
    if (this.isFull()) {
      return "Train Full!!!";
    }
    this.passenger.push(name)
    return "add passenger Success";
  }

  passengerOut(name: string) {
    if (name === this.masinis) return "cannot remove masinis"
    if (this.isEmpty()) {
      return "Train Empty!";
    }
    const index = this.passenger.indexOf(name);
    // console.log(index);
    if (index > 0){
      this.passenger.splice(index,1);
      return "remove passenger success"
    }
    return "passenger not found"
  }
}

const train = new Train();
console.log(train.showPassenger());
console.log(train.isEmpty());
console.log(train.isFull());
console.log(train.passengerIn("hud"));
console.log(train.passengerIn("masinis"));
console.log(train.passengerIn("hud"));
console.log(train.passengerIn("hud"));
console.log(train.passengerIn("hud"));
console.log(train.passengerIn("hud"));
console.log(train.passengerIn("hud"));
console.log(train.passengerIn("hud"));
console.log(train.passengerIn("hud"));
console.log(train.passengerIn("hadi"));
console.log(train.passengerOut("hadi"));
console.log(train.passengerOut("hadi"));
console.log(train.passengerIn("hud"));
// console.log(train.passengerOut("huda"));

console.log(train.showPassenger());


