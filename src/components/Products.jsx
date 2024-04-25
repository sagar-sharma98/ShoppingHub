import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchData } from "../store/product-slice";
import { useDispatch } from "react-redux";

import ProductCard from "./ProductCard";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <SimpleGrid p="10px" spacing="6px" minChildWidth="300px">
      {products.length > 0 &&
        products.map((item) => <ProductCard key={item.id} item={item} />)}
    </SimpleGrid>
  );
}
