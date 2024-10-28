import styled from "styled-components";
import palette from "../../styles/colorPalette";
import Footer from "../../components/Footer";
import PortfolioItem from "../../components/portfolio/PortfolioItem";

const Portfolio = () => {
  const portfolios = [{"title": "마이꾸미", "period": "2024.04 ~ 2024.11 (8개월)", "goal": "🏢 SW마에스트로 15기", "backgroundColor": "#AEE7EB",
    "skills": ["Android", "Kotlin", "MVVM", "Clean Architecture"], "thumbnailUrl": "https://github.com/user-attachments/assets/09faed84-1f1e-42a7-87a3-483035538c6d"},
    {"title": "이루다", "period": "2023.07 ~ 2023.08 (2개월)", "goal": "🏆 서울 우먼테크 해커톤 우수상", "backgroundColor": "#BECAF0",
      "skills": ["Android", "Kotlin", "ViewPager", "ViewBinding"], "thumbnailUrl": "https://github.com/womentech-hackathon/.github/assets/76805879/997d71ed-d623-4b37-920f-ac527979c982"},
    {"title": "개발새발", "period": "2022.11 ~ 2023.01 (3개월)", "goal": "✅ Google Play Store 출시", "backgroundColor": "#E5D5F9",
      "skills": ["Android", "Kotlin", "Jetpack Room", "Navigation"], "thumbnailUrl": "https://github.com/user-attachments/assets/c97fe103-8469-47d9-9ae8-5ddd4f3785d5"},
    {"title": "감자톤 간식 게임 웹사이트", "period": "2023.09 ~ 2023.11 (3개월)", "goal": "💻 2023 한림대 x 강원대 멋쟁이사자처럼 연합 해커톤 '감자톤' 운영", "backgroundColor": "#F9E1CF",
      "skills": ["React.js", "JavaScript", "TypeScript"], "thumbnailUrl": "https://github.com/user-attachments/assets/719a35fc-9c69-41ca-a9ed-f7a7b8f45699"}
  ];

  return (
    <ContentFooter>
      <Container>

        {/* 검색, 정렬 */}

        {/* 리스트 */}
        <PortfolioContainer>
          <PortfolioHeader>
            <PortfolioTitle>포트폴리오</PortfolioTitle>
          </PortfolioHeader>

          <PortfoliotHr/>

          <PortfolioList>
            {portfolios.map((port, idx) => (
              <PortfolioItem
                key={idx}
                title={port.title}
                thumbnailUrl={port.thumbnailUrl}
                skills={port.skills}
                period={port.period}
                goal={port.goal}
                backgroundColor={port.backgroundColor}
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