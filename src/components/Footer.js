// 푸터
import styled from "styled-components";
import palette from "../styles/colorPalette";

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
  padding: 2.2vh 0vh;
`;

const Since = styled.div`
  font-size: 1rem;
  font-family: 'omyu_pretty';
  color: ${palette.gray65};
  cursor: default;
`;

export default Footer;