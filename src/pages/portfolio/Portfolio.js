import styled from "styled-components";
import palette from "../../styles/colorPalette";
import Footer from "../../components/Footer";

const Portfolio = () => {
  return (
    <ContentFooter>
      <Container>
        포트폴리오 내용 채우기
      </Container>

      <Footer />
    </ContentFooter>
  );
}

const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid ${palette.mainColor};
  margin-top: 20px;
  padding: 92px 42px 38px 35px;
  font-family: GmarketSansTTFMedium;
`;

export default Portfolio;