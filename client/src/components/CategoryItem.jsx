import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { mobile } from "../responsive";
const Container = styled.div`
  flex: 1;
  min-width: 280px;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 20px;
  background-color: white;
  color: gray;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image
        src={
          process.env.REACT_APP_UPLOAD_URL +
          item.attributes.image.data.attributes.url
        }
      />
      <Info>
        <Title>{item.attributes.title}</Title>
        <Link to={`products/${item.attributes.name}`}>
          <Button>{item.attributes.buttonText}</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
