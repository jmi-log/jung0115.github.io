// 자기소개 페이지
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import emailIcon from "../../icons/ic_info_email.png";
import githubIcon from "../../icons/ic_info_github.png";
import Footer from "../../components/Footer";

const Jmi = () => {
  const education = {"description": "경상국립대학교, 컴퓨터공학과 졸업", "period": "2020.03 ~ 2024.08"};
  const info = ["빠르게 학습하고 도전하며 안드로이드 개발 역량을 쌓고 있습니다.",
    "SW 마에스트로 15기에서 '마이꾸미' 앱을 개발하며, Compose, MVVM, 클린 아키텍처, 멀티 모듈, DI 등을 적용했습니다.",
    "UMC를 통해 약 1개월 동안 Node.js를 이용해 API 개발을 공부하고, 시니어 맞춤 구인구직 웹의 백엔드 개발을 완수한 경험도 있습니다. 처음 배우는 기술도 빠르게 습득하여 활용할 수 있는 개발자가 되고자 합니다."];
  const experiences = [{"name": "SW마에스트로 15기 수료 예정", "period": "2024.04 ~ 2024.11 (8개월)", "institution": "과학기술정보통신부"},
    {"name": "Remote Internship Program 4th Expert Track 수료", "period": "2023.09 ~ 2023.11 (3개월)", "institution": "고용노동부"},
    {"name": "UMC 4th Node.js 파트 수료 ", "period": "2023.03 ~ 2023.08 (6개월)", "institution": "NE(O)RDINARY"},
    {"name": "UMC 3rd Android 파트 수료 ", "period": "2022.09 ~ 2023.02 (6개월)", "institution": "NE(O)RDINARY"},
    {"name": "GNU 창의융합동아리 멘토", "period": "2021.07 ~ 2021.12 (6개월)", "institution": "경상국립대학교"},
    {"name": "경상국립대학교 컴퓨터공학과 인공지능 학부 연구실 ", "period": "2021.03 ~ 2022.06 (1년 6개월)", "institution": "경상국립대학교"},
    {"name": "GNU 창의동아리 Big D.T 운영", "period": "2020.05 ~ 2020.07 (3개월)", "institution": "경상국립대학교"},];
  const awards = [{"name": "메카이브 메이커톤", "result": "우수상(3위)", "year": "2023", "institution": "한국잡월드"},
    {"name": "서울 우먼테크 해커톤", "result": "우수상(3위)", "year": "2023", "institution": "서울특별시, 서울시여성가족재단"},
    {"name": "한동대학교 제2회 영남권 대학 연합 해커톤 DREAMLANDTHON", "result": "장려상(5위)", "year": "2023", "institution": "한동대학교"},
    {"name": "4th NE(O)RDINARY 해커톤", "result": "최우수상(2위)", "year": "2023", "institution": "NE(O)RDINARY"},
    {"name": "GNU 지식재산-빅데이터 경진대회", "result": "우수상", "year": "2023", "institution": "경상대 빅데이터기술융합인재양성사업단"},
    {"name": "GNU 빅데이터 아이디어 공모전", "result": "장려상", "year": "2021", "institution": "경상대 빅데이터 공유대학사업단"},
    {"name": "GNU 창의동아리", "result": "우수상", "year": "2020", "institution": "경상대학교 미래교육원"},];


  return(
    <ContentFooter>
      <Container>
        {/* 자기소개 */}
        <InfoContainer>
          <ProfileContainer>
          <ProfileImg src="https://avatars.githubusercontent.com/u/76805879?v=4" />

            <ContentGroup>
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
          </ProfileContainer>

          <InfoHr/>

          <DescriptionContainer>
            <InfoContent>
              <TitleContainer>
                <InfoTitle>👋🏻 안녕하세요, 안드로이드 앱 개발자를 꿈꾸는 조정미입니다.</InfoTitle>
                <TitleHr />
              </TitleContainer>
            </InfoContent>
            
            <ul>
              {info.map((info, idx) => (
                <InfoDescription key={idx}>{info}</InfoDescription>
              ))}
            </ul>
            
          </DescriptionContainer>

        </InfoContainer>

        {/* project, award */}
        <PortfolioContainer>


          {/* Experience */}
          <PfTitleContainer>
            <PfTitle>🔥 Experience</PfTitle>
            <PfTitleLine/>
          </PfTitleContainer>

          <ExperienceContainer>
            <ExperienceLine>
              <ExperiencePeriod> <ExperienceTitle>진행 기간</ExperienceTitle> </ExperiencePeriod>
              <ExperienceName> <ExperienceTitle>활동</ExperienceTitle> </ExperienceName>
              <ExperienceInstitution> <ExperienceTitle>기관</ExperienceTitle> </ExperienceInstitution>
            </ExperienceLine>
            
            <ExperienceTitleLine />

            {experiences.map((experience, idx) => (
              <>
                <ExperienceLine key={idx}>
                  <ExperiencePeriod> <ExperienceContent>{experience.period}</ExperienceContent> </ExperiencePeriod>
                  <ExperienceName> <ExperienceContent>{experience.name}</ExperienceContent> </ExperienceName>
                  <ExperienceInstitution> <ExperienceContent>{experience.institution}</ExperienceContent> </ExperienceInstitution>
                </ExperienceLine>

                {experiences.length != idx + 1 ?
                  <ExperienceContentLine />
                  : <ExperienceLastLine/> }
              </>
            ))}

          </ExperienceContainer>

          {/* Award */}
          <PfTitleContainer>
            <PfTitle>🏆 Award</PfTitle>
            <PfTitleLine/>
          </PfTitleContainer>

          <AwardContainer>
            {awards.map((award, idx) => (
              <Award key={idx}>
                <AwardYearContainer><AwardContent>{award.year}</AwardContent></AwardYearContainer>
                <AwardNameContainer><AwardContent>{award.name}</AwardContent></AwardNameContainer>
                <AwardInstitutionContainer><AwardContent>{award.institution}</AwardContent></AwardInstitutionContainer>
                <AwardResultContainer><AwardResult>{award.result}</AwardResult></AwardResultContainer>
              </Award>
            ))}

          </AwardContainer>

          {/* Education */}
          <PfTitleContainer>
            <PfTitle>🏫 Education</PfTitle>
            <PfTitleLine/>
          </PfTitleContainer>

          <EducationContainer>
            <Education>
              <EducationPeriod>{education.period}</EducationPeriod>
              <>|</>
              <EducationDescription>{education.description}</EducationDescription>
              
            </Education>
          </EducationContainer>

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
  margin-top: 20px;
  padding: 62px 30px 30px 30px;
  border: 2px solid rgba(150, 197, 118, 0.30);
  background: rgba(150, 197, 118, 0.30);
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 3px;
  border: 2px solid ${palette.mainColor};
  background: ${palette.background};
`;
// 프로필
const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  margin-top: 16px;
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
  margin: 26px 0px 15px 20px;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentGroup = styled.div`
  margin: 14px 26px 18px 22px;
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
  font-size: 10px;
  margin-left: 6px;
  white-space: pre-line;
`;

const TitleContainer = styled.div`
  display: inline-block;
`;
const InfoTitle = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 18px;
  cursor: default;
  magin-right: auto;
`;
const TitleHr = styled.hr`
  width: 100%;
  height: 1px;
  border: 0px;
  background: ${palette.mainColor};
  margin-top: 3px;
  margin-right: auto;
`;
const DescriptionContainer = styled.div`
  display: block;
`;
const InfoDescription = styled.li`
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 15px;
  margin: 5px 20px 0px 0px;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  border: 2px solid ${palette.mainColor};
  background: ${palette.background};
  margin-top: 26px;
  padding-bottom: 26px;
`;

// 포트폴리오 Title
const PfTitleContainer = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  margin: 32px 32px 0px 32px;
`;
const PfTitle = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFBold;
  font-size: 18px;
  z-index: 100;
`;
const PfTitleLine = styled.div`
  width: 100%;
  height: 8px;
  background: ${palette.highlightGreen};
  position: absolute;
  bottom: -3px;
  margin-right: auto;
`;

// Experience
const ExperienceContainer = styled.div`
  margin: 12px 36px 0px 36px;
`;
const ExperienceName = styled.div`
  flex: 5;
`;
const ExperiencePeriod = styled.div`
  flex: 3;
`;
const ExperienceInstitution = styled.div`
  flex: 2.5;
`;
const ExperienceLine = styled.div`
  display: flex;
`;
const ExperienceTitle = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 15px;
  margin: 10px 14px 10px 14px;
`;
const ExperienceContent = styled.div`
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 14px;
  margin: 10px 14px 10px 14px;
`;
const ExperienceTitleLine = styled.div`
  width: 100%;
  height: 1.5px;
  background: ${palette.gray82};
`;
const ExperienceContentLine = styled.div`
  width: 100%;
  height: 0.5px;
  background: ${palette.gray82};
`;
const ExperienceLastLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${palette.gray82};
`;

// Award
const AwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 22px 32px 0px 38px;
`;
const Award = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const AwardYearContainer = styled.div`
  flex: 0.6;
`;
const AwardNameContainer = styled.div`
  flex: 5;
`;
const AwardInstitutionContainer = styled.div`
  flex: 3;
`;
const AwardResultContainer = styled.div`
  flex: 1.8;
`;
const AwardContent = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 15px;
`;
const AwardResult = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFBold;
  font-size: 15px;
`;

// Education
const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 22px 32px 0px 38px;
`;
const Education = styled.div`
  display: flex;
  font-family: GmarketSansTTFMedium;
`;

const EducationPeriod = styled.div`
  color: ${palette.gray70};
  font-size: 15px;
  margin-right: 10px;
`;
const EducationDescription = styled.div`
  color: ${palette.gray3C};
  font-size: 15px;
  margin-left: 10px;
`;

export default Jmi;