import { Product } from "../modules/product";

// a function calculateTax() that accepts a Product object and returns the price including tax
export class taxCalculator {
  calculateTax(amount: number): number {
    return amount * 0.1;
  }
}
