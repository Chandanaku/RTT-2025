import { Product } from "../models/Product";
import { err_app } from "../utils/errorHandler";

const product_list = [
  {
    id: 1,
    name: "Laptop",
    price: 500,
    category: "electronics",
    disco_Percentage: 10,
  },
  {
    id: 2,
    name: "flour",
    price: 25,
    category: "groceries",
    disco_Percentage: 0,
  },
  {
    id: 3,
    name: "Headphones",
    price: 180,
    category: "electronics",
    disco_Percentage: 120,
  },
];

export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve(
          product_list.map(
            (p) =>
              new Product(p.id, p.name, p.price, p.category, p.disco_Percentage)
          )
        );
      } else {
        reject(new err_app("Failed to get data"));
      }
    }, 1000);
  });
};
