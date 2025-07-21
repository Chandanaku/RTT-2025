export const calculate_tax = (price: number, category: string): number => {
  const st_tax = 0.08;
  const grtax = 0.05;
  const taxrate = category.toLowerCase() === "groceries" ? grtax : st_tax;
  return price * taxrate;
};
