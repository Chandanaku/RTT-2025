export class Product {
  id: number;
  name: string;
  price: number;
  category: string;
  disco_Percentage: number;

  constructor(
    id: number,
    name: string,
    price: number,
    category: string,
    disco_Percentage: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.disco_Percentage = disco_Percentage;
  }

  display(): void {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
    console.log(`Category: ${this.category}`);
    if (this.disco_Percentage) {
      console.log(`Discount: ${this.disco_Percentage}%`);
    }
  }

  PricewithDiscount(): number {
    if (this.disco_Percentage) {
      return this.price - (this.price * this.disco_Percentage) / 100;
    }
    return this.price;
  }
}
