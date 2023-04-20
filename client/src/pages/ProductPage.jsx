import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/store";

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
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const incQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    if (quantity > 1) {
      setQuantity((prevQty) => prevQty - 1);
    } else return 1;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:1337/api/products/${productId}?populate=*`
      );
      const data = await response.json();
      setProduct(data.data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image
            src={
              process.env.REACT_APP_UPLOAD_URL +
              product?.attributes.image.data.attributes.url
            }
          />
        </ImageContainer>
        <InfoContainer>
          <Title>{product?.attributes.title}</Title>
          <Desc>{product?.attributes.description}</Desc>
          <Price>${product?.attributes.price}</Price>

          <AddContainer>
            <QtyContainer>
              <QtyIcon onClick={decQty}>-</QtyIcon>
              <Qty>{quantity}</Qty>
              <QtyIcon onClick={incQty}>+</QtyIcon>
            </QtyContainer>
            <Button
              onClick={() =>
                dispatch(
                  cartActions.addToCart({
                    id: product.id,
                    title: product.attributes.title,
                    desc: product.attributes.description,
                    image:
                      process.env.REACT_APP_UPLOAD_URL +
                      product.attributes.image.data.attributes.url,
                    price: product.attributes.price,
                    quantity,
                  })
                )
              }
            >
              Add To Cart
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
    </Container>
  );
};

export default ProductPage;
