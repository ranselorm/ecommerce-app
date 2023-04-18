import styled from "@emotion/styled";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 80%;
  height: 75vh;
  object-fit: cover;

  ${mobile({
    height: "40%",
    width: "100%",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSelect = styled.select`
  padding: 5px;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
`;
const FilterOption = styled.option`
  cursor: pointer;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const QtyIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
`;
const Qty = styled.span`
  width: 25px;
  height: 25px;
  border: 1px solid teal;
  border-radius: 10px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src="../images/black-shirt.png" alt="black shirt" />
        </ImageContainer>
        <InfoContainer>
          <Title>Black Shirt</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum,
            reprehenderit exercitationem asperiores deleniti velit tempore
            provident sit doloremque qui optio fugit, vero iste? Eum vitae
            consequatur numquam ut modi.
          </Desc>
          <Price>$50</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSelect>
                <FilterOption>XS</FilterOption>
                <FilterOption>S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>L</FilterOption>
                <FilterOption>XL</FilterOption>
              </FilterSelect>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <QtyContainer>
              <QtyIcon>-</QtyIcon>
              <Qty>1</Qty>
              <QtyIcon>+</QtyIcon>
            </QtyContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
    </Container>
  );
};

export default ProductPage;
