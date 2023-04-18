import React, { useState, useEffect } from "react";
import { categories } from "../data";
import styled from "@emotion/styled";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  margin: 30px;
`;

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "http://localhost:1337/api/categories?populate=*"
      );
      const data = await response.json();
      setCategories(data.data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      {categories?.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Category;
