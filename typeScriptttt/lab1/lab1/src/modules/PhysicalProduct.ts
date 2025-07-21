import { Product } from "../modules/product";

export interface DiscountableProduct {
  applyDiscount(dsperce: number): void;
}

export class PhysicalProduct extends Product {
  weight: number;
  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  getPriceWithTax(): number {
    //a method that calculates the final price of the product with tax.
    const taxrate = 0.1;
    return this.price + taxrate;
  }
  get formattedweight(): string {
    return `${this.weight.toFixed(1)} kg`;
  }
  // discount
  applyDiscount(dsperce: number): number {
    const discount = (this.price * dsperce) / 100;
    this.price -= discount;
    return this.price;
  }
  // Bulk Discounts

  applyBulkDiscount(priceThreshold: number): String {
    var p: string = " ";
    const weightThreshold: number = 100;

    if (this.price >= priceThreshold || this.weight >= weightThreshold) {
      p = `${this.applyDiscount(30)}`; // apply 30% discount
    } else {
      p = `${this.price} Discounts are avialable over 100 kg`;
    }
    return p;
  }
}
