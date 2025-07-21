import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
  NetworkError,
  DataError,
} from "./apiSimulator";

const displayCatalogwithReviews = async () => {
  try {
    const catalog = await fetchProductCatalog();
    for (const product of catalog) {
      console.log(`${product.name} ($${product.price})`);

      try {
        const reviews = await fetchProductReviews(product.id);
        console.log(`Reviews for ${product.name}:`);
        for (const review of reviews) {
          console.log(
            ` ${review.user} (${review.rating}/5): ${review.comment}`
          );
        }
      } catch (err) {
        if (err instanceof NetworkError || err instanceof DataError) {
          console.error(`${err.message}`);
        } else {
          console.error("Unknown error fail to fetch reviews", err);
        }
      }
    }

    try {
      const report = await fetchSalesReport();

      console.log(`Total Sales: $${report.totalSales}`);
      console.log(`Units Sold: ${report.unitsSold}`);
      console.log(`Average Price: $${report.averagePrice}`);
    } catch (err) {
      if (err instanceof NetworkError || err instanceof DataError) {
        console.error(err.message);
      } else {
        console.error("Unknown error ,fiail to fetch sales report ", err);
      }
    }
  } catch (err) {
    if (err instanceof NetworkError || err instanceof DataError) {
      console.error(err.message);
    } else {
      console.error("error ", err);
    }
  } finally {
    console.log("successful");
  }
};

displayCatalogwithReviews();
