import { fetchProducts } from "../src/services/apiService";
import { calculate_discount } from "../src/utils/discountCalculator";
import { calculate_tax } from "../src/utils/taxCalculator";
import { dif_err } from "../src/utils/errorHandler";

const ecommerce = async () => {
  try {
    const products = await fetchProducts();
    products.forEach((p) => {
      p.display();
      const discount = calculate_discount(p.price, p.disco_Percentage);
      const tax = calculate_tax(p.PricewithDiscount(), p.category);
      const finalPrice = p.PricewithDiscount() + tax;

      console.log(
        `Discount  $${discount.toFixed(2)}, Tax $${tax.toFixed(
          2
        )}, total $${finalPrice.toFixed(2)}`
      );
    });
  } catch (err) {
    dif_err(err);
  } finally {
    console.log("Finished processing product data.");
  }
};

ecommerce();
