// Advance TypeScript Concepts

// Hybrid type interfaces
interface Power {
  (name: string);
  name: string;
  usePower(id: number): void;
}

function Superpower(): Power {
  let power = function (name: string) {
    console.log(`Super power is ${name}`);
  } as Power;
  power.name = 'None';
  power.usePower = function (id: number) {
    console.log('Power executed!');
  }
  return power;
}

let power: Power;
power = Superpower();
power('Super human speed');
power.name = 'Lazer eyes';
power.usePower(101);

console.dir(power);

// Inheritance

// Prototype inheritance in ES5
var Animal = function () {

  this.sleep = function () {
    console.log('sleeping');
  }

  this.eat = function () {
    console.log('eating');
  }
}

Animal.prototype.bark = function () {
  console.log('barking');
}

var a = new Animal();
a.bark();
a.sleep();
a.eat();

// Inheritance in TypeScript
class SimpleCalculator {
  protected z: number;
  public constructor() { }
  public addition(x: number, y: number) {
    this.z = x + y;
  }
  public subtraction(x: number, y: number) {
    this.z = x - y;
  }
}

class ComplexCalculator extends SimpleCalculator {
  public constructor() { super(); }
  public multiplication(x: number, y: number) {
    this.z = x * y;
  }
  public division(x: number, y: number) {
    this.z = x / y;
  }
}
let calculator = new ComplexCalculator();
calculator.addition(10, 20);
calculator.subtraction(20, 10);
calculator.multiplication(10, 20);
calculator.division(20, 10);

let updateCustomerNameAllowed = true;
class Customer {
  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(newName: string) {
    if (updateCustomerNameAllowed == true) {
      this._name = newName;
    }
    else {
      alert("Error: Updating Customer name not allowed!");
    }
  }
}

// Generics
function returnWhatReceived<T>(arg: T): T {
  return arg;
}

let stringOutput = returnWhatReceived<string>("return this");
// type of output will be 'string'
let numberOutput = returnWhatReceived<number>(101);
// type of output will be number

// Generic interfaces
interface GenericFunc<T> {
  (arg: T): T;
}
function func<T>(arg: T): T {
  return arg;
}
let myFunc: GenericFunc<number> = func;

// Generic classes
class GenericClass<T> {
  add: (a: T, b: T) => T;
}

let myGenericClass = new GenericClass<number>();
myGenericClass.add = function (a, b) { return a + b; };
