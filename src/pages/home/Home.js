import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import organizationIcon from "../../icons/ic_info_organization.png";
import emailIcon from "../../icons/ic_info_email.png";
import githubIcon from "../../icons/ic_info_github.png";
import MoreContentsBtn from "../../components/MoreContentsBtn";

const Home = () => {
  return(
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
              <InfoText>경상국립대학교, 컴퓨터과학부 컴퓨터과학전공 재학 | 2020.03 ~</InfoText>
            </Info>

            <Info>
              <InfoIcon src={emailIcon}/>
              <InfoText>jungim7490@naver.com</InfoText>
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

        <MoreInfoBtn>
          <MoreContentsBtn
            text={"더 자세한 소개"}/>
        </MoreInfoBtn>

      </InfoContainer>

      {/* 최근 글 8개 */}
      <NewPostContainer>
        <NewPostHeader>
          <NewPostTitle>최근 글</NewPostTitle>
          <MorePostBtn>
            <MoreContentsBtn text={"더보기"}/>
          </MorePostBtn>
        </NewPostHeader>

        <NewPostHr/>

      </NewPostContainer>
      
    </Container>
  );
}

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
  font-size: 11px;
  margin-left: 6px;
`;

// 자기소개 자세히 보기
const MoreInfoBtn = styled.div`
  margin: auto 28px 20px auto;
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
`;
const MorePostBtn = styled.div`
  margin: 0px 26px 18px auto;
`;
const NewPostHr = styled.hr`
  width: auto;
  height: 1.5px;
  border: 0px;
  background: ${palette.gray70};
  margin: 0px 5px;
`;

export default Home;