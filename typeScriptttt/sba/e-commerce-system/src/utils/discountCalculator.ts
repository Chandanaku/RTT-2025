export const calculate_discount = (
  price: number,
  disc_prize: number
): number => {
  if (!disc_prize) return 0;
  return (price * disc_prize) / 100;
};
