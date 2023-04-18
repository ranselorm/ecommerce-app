import styled from "@emotion/styled";

const Announcement = () => {
  const Container = styled.div`
    background-color: teal;
    height: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
  `;
  return <Container>Super deal! Free shipping on orders over $75</Container>;
};

export default Announcement;
