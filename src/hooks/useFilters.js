import { useContext, useState } from "react";
import { FiltersContext } from "../context/filtersContext.jsx";
import { products as initialProducts } from "../mocks/products.json";

export function useFilters() {
  const [products] = useState(initialProducts);
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters?.minPrice &&
        (filters.category === "all" || product.category === filters?.category)
      );
    });
  };

  return { filters, filteredProducts: filterProducts(products), setFilters };
}
