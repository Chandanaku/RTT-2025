import { Product } from "../modules/product";
export class DigitalProduct extends Product {
  fileSize: number;
  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }
  getPriceWithTax(tax: number): number {
    //a method that calculates the final price of the product with tax.

    return this.price + tax;
  }
  get formattedweight(): string {
    return `${this.fileSize.toFixed(2)} Mb`;
  }
}
