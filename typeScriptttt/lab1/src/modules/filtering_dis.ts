import { Product } from "./product";

export function sortProducts(
  products: Product[],
  sortBy: "name" | "price"
): Product[] {
  return [...products].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });
}
