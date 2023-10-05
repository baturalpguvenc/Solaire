import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 140px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  font-family: "Montserrat";
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  margin-left: 10px;
  margin-right: 30px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 
  30px;
  cursor: pointer;
`;


const Button = styled.button`
  width: 130px;
  padding: 15px;
  background: linear-gradient(135deg, #FFA500, #FF6347);
  color: black;
  border: none;
  border-radius: 120px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif; /* Montserrat yazı tipini kullan */
  font-size: 16px;
  position: relative;
  margin-left: 5px;
`;


const Emoji = styled.span`
  font-size: 17px; /* Emoji boyutunu ayarlayın */
  margin-right: 10px; /* Emoji ile metin arasına boşluk ekleyin */
  margin-left: 8px;
`;

const NavbarButton = () => {
  return (
    <Button>
      <Emoji role="img" aria-label="fox emoji">
        🦊
      </Emoji>
      Click Me
    </Button>
  );
};

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {}
          <Icon src="./img/search.png" />
          <Button> Metamask
          <Emoji role="img" aria-label="fox emoji">
                🦊  </Emoji>
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;