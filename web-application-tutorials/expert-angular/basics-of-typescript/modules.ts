namespace Inventory {
  export class Product {
    public constructor(public name: string, public quantity: number) { }
  }
  // product is accessible
  let p = new Product('mobile', 101);
}

// Product class is not accessible outside namespace
let p = new Inventory.Product('mobile', 101);
