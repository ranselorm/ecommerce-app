import styled from "@emotion/styled";
import { BsFillSendFill } from "react-icons/bs";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #e2d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", padding: "5px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: 0;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  border: none;
  flex: 1;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates about your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <BsFillSendFill />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
