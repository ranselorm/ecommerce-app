import styled from "@emotion/styled";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { mobile } from "../responsive";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Container = styled.div`
  display: flex;
  height: 40vh;
  ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  font-size: 24px;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3``;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: teal;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SELORM.DEV</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon>
            <AiFillInstagram />
          </SocialIcon>
          <SocialIcon>
            <AiFillTwitterCircle />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} />
          Street 2073, Coconut Island
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt style={{ marginRight: "10px" }} /> +233 554 00231
        </ContactItem>
        <ContactItem>
          <AiFillMail style={{ marginRight: "10px" }} />
          email@selorm.dev
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
