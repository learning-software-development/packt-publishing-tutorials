// Basic TypeScript Concepts

// Number type
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(`decimal = ${decimal}`);
console.log(`hex = ${hex}`);
console.log(`binary = ${binary}`);
console.log(`octal = ${octal}`);

// Boolean type
let isWorldInPeril: Boolean;
isWorldInPeril = true;

console.log(`isWorldInPeril = ${isWorldInPeril}`);

// String
let superHeroName: string = "Batman";

console.log(`authorName = ${superHeroName}`);

// Array
let even: number[] = [2, 4, 6, 8, 10];

console.log(`even = ${even}`);

// Enum
enum Day {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATERDAY = 'Saterday',
  SUNDAY = 'Sunday'
};
let firstDay: Day = Day.MONDAY;

console.log(`First day of the week is ${firstDay}`)

// Any
let mixedList: any[] = [1, "I am evil", false];
mixedList[2] = "no you are not";

console.log(`mixedList = ${mixedList}`);

// Classes
class Villain {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  logVillain() {
    console.log(`villain name is ${this.name}`);
  }
}

let villain = new Villain("Jack Napier");

console.dir(villain);

// Interfaces
interface HeroI {
  id: number;
  name: string;
  bonus?: number;
}

function addHero(heroObj: HeroI) {
  console.log(heroObj.name);
  if (heroObj.bonus) {
    console.log(heroObj.bonus);
  }
}
let hero: HeroI = { id: 101, name: "Bruce Wayne" };
addHero(hero);

// Function type interfaces
interface AddSidekickFunc {
  (firstName: string, lastName: string): string;
}

let addSidekick: AddSidekickFunc;
addSidekick = function (firstName: string, lastName: string) {
  console.log('Full Name: ' + firstName + ' ' + lastName);
  return firstName + ' ' + lastName;
}

// Array type interfaces
interface SuperVillainNameArray {
  [index: number]: string;
}

let superVillianNameList: SuperVillainNameArray;
superVillianNameList = ["Joker", "Red Skull", "Skeletor"];

// Class type interfaces
interface HeroInterface {
  id: number;
  firstName: string;
  lastName: string;
  addHero(firstName: string, lastName: string);
  getHero(id: number): SuperHero;
}

class SuperHero implements HeroInterface {
  id: number;
  firstName: string;
  lastName: string;
  constructor() { }
  addHero(firstName: string, lastName: string) {
    // code to add hero
  }
  getHero(id: number): SuperHero {
    return this;
  }
}
