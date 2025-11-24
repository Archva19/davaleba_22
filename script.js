// 1.

const bank = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw(amount) {
    this.balance -= amount;
    return this.balance;
  },
  getBalance() {
    return this.balance;
  },
};

bank.deposit(500);
bank.withdraw(200);
let balance = bank.getBalance();
console.log(balance);

// 2.

const products = [
  { name: "Mouse", price: 25, quantity: 5 },
  { name: "Keyboard", price: 75, quantity: 3 },
  { name: "Monitor", price: 300, quantity: 1 },
];

products
  .map(function (object) {
    object.total = object.price * object.quantity;
    return object;
  })
  .filter((object) => object.total > 100)
  .forEach((object) =>
    console.log(`Product: ${object.name}, total price: ${object.total} units`)
  );

// 3.

const student = {
  name: "john",
  age: 20,
  grades: [80, 65, 98, 54, 71, 89],
  getAverageGrade() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    averageGrade = sum / this.grades.length;
    return averageGrade;
  },
  isPassed() {
    if (this.getAverageGrade() > 60) {
      return true;
    }
    return false;
  },
};

averageGrade = student.getAverageGrade();
passStatus = student.isPassed();
console.log(averageGrade);
console.log(passStatus);

// 4.

const users = [
  { id: 1, name: "ana", active: true },
  { id: 2, name: "giorgi", active: false },
  { id: 3, name: "mari", active: true },
  { id: 4, name: "luka", active: false },
];

let activeNames = [];

users
  .filter((object) => object.active)
  .map(function (object) {
    activeNames.push(object.name);
    return object;
  })
  .forEach((object) => console.log(object));

console.log(activeNames);
