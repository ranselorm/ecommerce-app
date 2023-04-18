import styled from "@emotion/styled";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9ecec;
  position: relative;
  margin: 5px;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background-color: white;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    opacity: 100%;
  }
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const PriceContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  z-index: 50;
  padding: 20px 20px;
  background-color: white;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const Price = styled.span``;

const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image
        src={
          process.env.REACT_APP_UPLOAD_URL +
          product.attributes.image.data.attributes.url
        }
      />
      <Info>
        <Icon>
          <BiCartAdd />
        </Icon>
        <Icon>
          <AiOutlineSearch />
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Info>
      <PriceContainer>
        <Price>${product.attributes.price}</Price>
      </PriceContainer>
    </Container>
  );
};

export default Product;
