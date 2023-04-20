import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 40px;
  padding: 20px;
  ${mobile({
    height: "50px",
    marginBottom: "10px",
    paddingBottom: "15px",
  })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const totalQuantities = useSelector((state) => state.cart.totalQuantities);
  console.log(totalQuantities);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link
              to="/"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <Logo>SELORM.DEV</Logo>
            </Link>
          </Left>
          <Center>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={totalQuantities} color="error">
                  <ShoppingCartOutlinedIcon color="action" />
                </Badge>
              </MenuItem>
            </Link>
          </Center>
          <Right>
            <Link
              to="/signup"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <MenuItem>Signup</MenuItem>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <MenuItem>Login</MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
