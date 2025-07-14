import _ from "lodash";
interface Item {
  id: string;
  name?: string;
  price?: number;
  discountedPrice?: number;
}

interface ProcessedItem {
  id: string;
  name: string;
  price: number;
  discountedPrice: number;
}

function processData(data: Item[]): ProcessedItem[] {
  const result: ProcessedItem[] = data.map((item) => {
    if (!item.id) {
      throw new Error("Data item is missing an id");
    }

    return {
      id: item.id,
      name: item.name ?? "Unknown",
      price: item.price ?? 0,
      discountedPrice: item.discountedPrice ?? item.price ?? 0,
    };
  });

  return _.orderBy(result, ["discountedPrice"], ["asc"]);
}

export { processData };
