// 홈
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import organizationIcon from "../../icons/ic_info_organization.png";
import emailIcon from "../../icons/ic_info_email.png";
import githubIcon from "../../icons/ic_info_github.png";
import MoreContentsBtn from "../../components/MoreContentsBtn";
import PostItemForHome from "../../components/post/PostItemForHome";
import Footer from "../../components/Footer";
import PortfolioItem from "../../components/portfolio/PortfolioItem";

const Home = ({ onSelectJmi, onSelectPosts, onSelectPortfolio }) => {
  const portfolios = [{"title": "마이꾸미", "period": "2024.04 ~ 2024.11 (8개월)", "goal": "🏢 SW마에스트로 15기", "backgroundColor": "#AEE7EB",
    "skills": ["Android", "Kotlin", "MVVM", "Clean Architecture"], "thumbnailUrl": "https://github.com/user-attachments/assets/09faed84-1f1e-42a7-87a3-483035538c6d"},
    {"title": "이루다", "period": "2023.07 ~ 2023.08 (2개월)", "goal": "🏆 서울 우먼테크 해커톤 우수상", "backgroundColor": "#BECAF0",
      "skills": ["Android", "Kotlin", "ViewPager", "ViewBinding"], "thumbnailUrl": "https://github.com/womentech-hackathon/.github/assets/76805879/997d71ed-d623-4b37-920f-ac527979c982"},
    {"title": "개발새발", "period": "2022.11 ~ 2023.01 (3개월)", "goal": "✅ Google Play Store 출시", "backgroundColor": "#E5D5F9",
      "skills": ["Android", "Kotlin", "Jetpack Room", "Navigation"], "thumbnailUrl": "https://github.com/user-attachments/assets/c97fe103-8469-47d9-9ae8-5ddd4f3785d5"},
    {"title": "감자톤 간식 게임 웹사이트", "period": "2023.09 ~ 2023.11 (3개월)", "goal": "💻 2023 한림대 x 강원대 멋쟁이사자처럼 연합 해커톤 '감자톤' 운영", "backgroundColor": "#F9E1CF",
      "skills": ["React.js", "JavaScript", "TypeScript"], "thumbnailUrl": "https://github.com/user-attachments/assets/719a35fc-9c69-41ca-a9ed-f7a7b8f45699"}
  ];

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

        {/* 최근 글 8개 */}
        {/* <NewPostContainer>
          <NewPostHeader>
            <NewPostTitle>최근 글</NewPostTitle>
            <MorePostBtn onClick={onSelectPosts}>
              <MoreContentsBtn text={"더보기"}/>
            </MorePostBtn>
          </NewPostHeader>

          <NewPostHr/>

          <PostList>
            <PostItemForHome
              title={"[Android Studio] Paging"}
              contents={"Android Developer 사이트를 구경하다가 Paging이라는 걸 발견했다. Recyclerview에서 데이터를 페이지로 끊어서 가져올 수 있는 것 같다. 표시해야 할 데이터가 많아서 스크롤이 작아지고 화면이 길어지면 그 데이터를 다 불러올 동안 로딩 시간이 너무 많이 걸리게 된다. 이전에 참여한 앱 프로젝트에서 이런 경우가 있었는데 당시에는 다른 기능을 빨리 마무리해야 해서 해결을 못하고 넘어갔지만 이 방법을 적용하면 될 것 같다.\n\n\n\n\n지금 졸업작품으로 만들고 있는 앱에도 이게 도움이 될 것 같다. 해당 부분에 적용해봐야겠다."}
              date={"2023.09.01 "}
              categories={["App", "Android Studio"]}
              viewCount={29}
              image={"https://github.com/jung0115/jung0115/assets/76805879/686139a2-c6fd-46c8-a3b2-657f4e3f3373"}/>
          </PostList>

        </NewPostContainer> */}

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

// 최근글
const NewPostContainer = styled.div`
  margin-top: 24px;
`;
const NewPostHeader = styled.div`
  display: flex;
`;
const NewPostTitle = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 20px;
  margin-left: 17px;
  margin-bottom: 12px;
  cursor: default;
`;
const MorePostBtn = styled.div`
  margin: 0px 26px 18px auto;
  cursor: pointer;
`;
const NewPostHr = styled.hr`
  width: auto;
  height: 1.5px;
  border: 0px;
  background: ${palette.gray70};
  margin: 0px 5px;
`;
const PostList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4px;
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