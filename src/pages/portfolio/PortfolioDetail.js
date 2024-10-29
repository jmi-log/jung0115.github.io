// 포트폴리오 상세
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import Footer from "../../components/Footer";

const PortfolioDetail = ({ content }) => {
  return(
    <ContentFooter>
      <Container>


      </Container>
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
  padding: 82px 43px 40px 46px;
  font-family: GmarketSansTTFMedium;
`;

export default PortfolioDetail;