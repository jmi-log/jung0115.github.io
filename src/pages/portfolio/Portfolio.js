// 포트폴리오
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import portfolios from "../../data/PortfolioData";

import Footer from "../../components/Footer";
import PortfolioItem from "../../components/portfolio/PortfolioItem";

const Portfolio = () => {
  return (
    <ContentFooter>
      <Container>
        {/* 리스트 */}
        <PortfolioContainer>

          <PortfolioHeader>
            <PortfolioTitle>포트폴리오</PortfolioTitle>
          </PortfolioHeader>

          {/* 검색, 정렬, 필터 */}


          <PortfoliotHr/>

          <PortfolioList>
            {portfolios.map((port, idx) => (
              <PortfolioItem
                key={idx}
                content={port}
                />
            ))}
          </PortfolioList>

        </PortfolioContainer>
        
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
  padding: 68px 42px 38px 35px;
  font-family: GmarketSansTTFMedium;
`;

// 포트폴리오
const PortfolioContainer = styled.div`
  
`;

const PortfolioHeader = styled.div`
  display: flex;
`;
const PortfolioTitle = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 20px;
  margin-left: 17px;
  margin-bottom: 12px;
  cursor: default;
`;
const PortfoliotHr = styled.hr`
  width: auto;
  height: 1.5px;
  border: 0px;
  background: ${palette.gray70};
  margin: 0px 5px;
`;

const PortfolioList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px 5px 0px 5px;
`;

export default Portfolio;