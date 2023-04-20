import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import Product from "../components/Product";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  min-width: 280px;
`;
const Title = styled.h1`
  margin: 20px;
  font-weight: 300;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter({ ...filter, [event.target.name]: value });
  };

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `http://localhost:1337/api/products?filters[categories][name][$eq]=${category}&populate=*`
      );
      const data = await response.json();
      setProducts(data.data);
    }
    fetchProducts();
  }, [category]);
  console.log("IN...", products);
  return (
    <Container>
      <Title>{category.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter By:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled defaultValue="Color" />
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select onChange={handleFilter} name="size">
            <Option disabled defaultValue="Size" />
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Wrapper>
        {products?.map((product) => (
          <Product product={product} />
        ))}
      </Wrapper>
      <Newsletter />
    </Container>
  );
};

export default ProductList;
