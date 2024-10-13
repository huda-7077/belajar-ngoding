// DATA STRUCTURE ========================================================================

// STACK -> LIFO (Last In First Out) =====================================================

class Stack {
  #container: any[];
  maxSize: number;
  constructor() {
    this.#container = [];
    this.maxSize = 10;
  }

  private isFull() {
    return this.#container.length >= this.maxSize;
  }
  private isEmpty() {
    return this.#container.length === 0;
  }

  push(element: any) {
    if (this.isFull()) {
      return "Container Penuh!";
    }
    this.#container.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Container Kosong!";
    }
    this.#container.pop();
  }
  showContainer() {
    return this.#container;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);
console.log(stack.push(11));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.showContainer());

// QUEUE -> FIFO (First In First Out) ========================================================

class Queue {
  #container: any[];

  constructor() {
    this.#container = [];
  }

  enqueue(element: any) {
    return this.#container.push(element);
  }
  dequeue() {
    return this.#container.shift();
  }
  showContainer() {
    return this.#container;
  }
}
const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log(queue.enqueue(6));
console.log(queue.enqueue(7));
console.log(queue.enqueue(8));

console.log(queue.showContainer());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.showContainer());

// SET -> Only unique value ==================================================================

const fruits: string[] = ["banana", "apple", "mango", "apple"];

const mySets = new Set(fruits);

console.log(mySets);

// menambahkan data ke dalam Set
mySets.add("grape");
console.log(mySets);

// mengecek apakah di dalam set ada value yanng kita cari
console.log(mySets.has("apple"));

// delete data
console.log(mySets.delete("grape"));

// looping isi Set
for (const value of mySets) {
  console.log(value);
}

// menghitung jumlah data yang ada
console.log(mySets.size);

// Map ======================================================================================

const myMap = new Map();

myMap.set("David", "123");
myMap.set("Joko", "321");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

console.log(myMap.size);

console.log(myMap.get("David"));
console.log(myMap.get("Joko"));
console.log(myMap.has("Joko"));
console.log(myMap.delete("Joko"));
console.log(myMap.has("Joko"));
// ================================ EXERCISE ==================================
/* 
    You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
    you can perform operations such as adding customers to the queue, calling the next customer, and 
    counting the number of customers in the queue.

   constructor:
   - this.queue

   method : 
   - enqueue : menambahkan value baru dalam antrian
   - dequeue : menghilangkan value paling depan dalam antrian
   - size : melihat jumlah antrian saat ini
*/
/* 
    You are given a JavaScript class called Train that simulates a train's passenger management system. 
    The Train class has the following methods and properties:

    - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
    capacity of 10 passengers.
    - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
    and false otherwise.
    - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
    train is empty and false otherwise.
    - showPassenger(): Returns an object that contains the list of passengers on the train and 
    the remaining available seats.
    - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
    success" if the passenger is successfully added, "train full" if the train is at full capacity, 
    and "passenger already exists" if the passenger is already on the train.
    - passengerOut(name): Removes a passenger with the given name from the train. It returns 
    "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
    if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
    "passenger not found" if the passenger with the given name is not found on the train.
*/
