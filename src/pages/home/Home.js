// 홈
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import portfolios from "../../data/PortfolioData";

import organizationIcon from "../../icons/ic_info_organization.png";
import emailIcon from "../../icons/ic_info_email.png";
import githubIcon from "../../icons/ic_info_github.png";
import MoreContentsBtn from "../../components/MoreContentsBtn";
import Footer from "../../components/Footer";
import PortfolioItem from "../../components/portfolio/PortfolioItem";

const Home = ({ onSelectJmi, onSelectPortfolio }) => {
  // 포폴 상위 3개까지만 보여주기
  const portfoliosMain = portfolios.slice(0, 3);

  return(
    <ContentFooter>
      <Container>
        {/* 자기소개 */}
        <InfoContainer>
          <ProfileImg src="https://avatars.githubusercontent.com/u/76805879?v=4" />

          <InfoHr/>

          <InfoContent>
            <TitleContainer>
              <InfoTitle>👋🏻 안녕하세요, 안드로이드 앱 개발자를 꿈꾸는 조정미입니다.</InfoTitle>
              <TitleHr />
            </TitleContainer>

            <ContentGroup>
              <Info>
                <InfoIcon src={organizationIcon}/>
                <InfoText>경상국립대학교, 컴퓨터공학과 졸업 | 2020.03 ~ 2024.08</InfoText>
              </Info>

              <Info>
                <InfoIcon src={emailIcon}/>
                <InfoTextEmail>jungim7490@naver.com</InfoTextEmail>
              </Info>

              <Info>
                <InfoIcon src={githubIcon}/>
                <Link
                  to="https://github.com/jung0115"
                  style={{
                    color: palette.gray65,
                  }}
                  target="_blank">
                <InfoText>https://github.com/jung0115</InfoText>
                </Link>
              </Info>
            </ContentGroup>
          </InfoContent>

          <MoreInfoBtn onClick={onSelectJmi}>
            <MoreContentsBtn
              text={"더 자세한 소개"}/>
          </MoreInfoBtn>

        </InfoContainer>

        {/* 주요 포트폴리오 4개 */}
        <PortfolioContainer>
          <PortfolioHeader>
            <PortfolioTitle>주요 포트폴리오</PortfolioTitle>
            <MorePortfolioBtn onClick={onSelectPortfolio}>
              <MoreContentsBtn text={"더보기"}/>
            </MorePortfolioBtn>
          </PortfolioHeader>

          <PortfoliotHr/>

          <PortfolioList>
            {portfoliosMain.map((port, idx) => (
              <PortfolioItem
                key={idx}
                content={port}
                />
            ))}
          </PortfolioList>

        </PortfolioContainer>
        
      </Container>

      <Footer/>
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
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid ${palette.mainColor};
  margin-top: 20px;
  padding: 62px 30px 38px 30px;
`;

// 자기소개
const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 3px;
  background: rgba(150, 197, 118, 0.30);
`;
// 프로필
const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 20px;
  border-radius: 100%;
`;

// 구분선
const InfoHr = styled.hr`
  height: auto;
  border: 0.7px dashed ${palette.mainColor};
  margin: 10px 0px;
`;

// 소개
const InfoContent = styled.div`
  margin: 26px 0px 0px 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoTitle = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 18px;
  cursor: default;
`;
const TitleHr = styled.hr`
  width: 100%;
  height: 1px;
  border: 0px;
  background: ${palette.mainColor};
  margin-top: 3px;
`;
const ContentGroup = styled.div`
  margin-top: 14px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;
const InfoIcon = styled.img`
  width: 16px;
  height: 16px;
`;
const InfoText = styled.div`
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 12px;
  margin-left: 6px;
`;
const InfoTextEmail = styled.div`
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 12px;
  margin-left: 6px;
  user-select: text;
`;

// 자기소개 자세히 보기
const MoreInfoBtn = styled.div`
  margin: auto 28px 20px auto;
  cursor: pointer;
`;

// 포트폴리오
const PortfolioContainer = styled.div`
  margin-top: 24px;
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
const MorePortfolioBtn = styled.div`
  margin: 0px 26px 18px auto;
  cursor: pointer;
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

export default Home;