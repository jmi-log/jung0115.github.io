import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Link
        to="/"
        style={{
          color: "#000000",
          textDecoration: "none",
        }}>
        <Title>jmi.log</Title>
      </Link>
      <Hr />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content : center;
  text-align: center;
`;

const Title = styled.div`
  width: fit-content;
  margin: auto;
  font-size: 1.5rem;
  font-family: 'omyu_pretty';
  color: ${palette.black};
`;

const Hr = styled.hr`
  width: 10rem;
  background: ${palette.black};
`;

export default Header;