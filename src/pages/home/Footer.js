import styled from "styled-components";
import palette from "../../styles/colorPalette";

const Footer = () => {
  return (
    <Container>
      <Since>since. 2023.04.28.Fri</Since>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
`;

const Since = styled.div`
  font-size: 0.5rem;
  font-family: 'omyu_pretty';
  color: ${palette.darkGray};
`;

export default Footer;