import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "http://localhost:1337/api/products?populate=*"
      );
      const data = await response.json();
      setProducts(data.data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      {products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
