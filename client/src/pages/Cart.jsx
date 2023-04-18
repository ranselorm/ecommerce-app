import styled from "@emotion/styled";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({ flexDirection: "column" })}
`;
const TopContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTextContainer = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  margin-right: 10px;
  ${mobile({ display: "none" })}
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "5px" })}
`;

const HR = styled.hr`
  color: lightgray;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding: "5px" })}
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: 20px;
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

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Cart</Title>
        <TopContainer>
          <TopButton>Continue Shopping</TopButton>
          <TopTextContainer>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTextContainer>
          <TopButton type="filled">Checkout Now</TopButton>
        </TopContainer>
        <BottomContainer>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cdn.shopify.com/s/files/1/0297/2762/1253/products/369471-01-_2_36386f96-831f-4322-980f-8eb277510c28_1200x.jpg?v=1584045801" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Thunder Shoes
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>3210078201
                  </ProductID>
                  <ProductColor color="blue" />

                  <ProductSize>
                    <b>Size: </b>37
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <QtyContainer>
                  <QtyIcon>-</QtyIcon>
                  <Qty>1</Qty>
                  <QtyIcon>+</QtyIcon>
                </QtyContainer>
                <ProductPrice>$120</ProductPrice>
              </PriceDetail>
            </Product>
            <HR />
            <Product>
              <ProductDetail>
                <Image src="../images/hoodie.png" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Sweat Pullover Hoodie
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>2021007502
                  </ProductID>
                  <ProductColor color="gray" />

                  <ProductSize>
                    <b>Size: </b>Large
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <QtyContainer>
                  <QtyIcon>-</QtyIcon>
                  <Qty>3</Qty>
                  <QtyIcon>+</QtyIcon>
                </QtyContainer>
                <ProductPrice>$120</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping: </SummaryItemText>
              <SummaryItemPrice>$ 3.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shiiping Discount: </SummaryItemText>
              <SummaryItemPrice>$ -3.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default Cart;
