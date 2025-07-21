export class Product {
  sku: string;
  name: string;
  price: number;
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
  displayDetails(): string {
    return `${this.sku} ${this.name} /
      ${this.price}`;
  }
  getPriceWithTax(tax: number): number {
    //a method that calculates the final price of the product with tax.
    return this.price + tax;
  }
}
