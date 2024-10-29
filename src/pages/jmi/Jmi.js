// 자기소개 페이지
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import ResumeData from "../../data/ResumeData";

import emailIcon from "../../icons/ic_info_email.png";
import githubIcon from "../../icons/ic_info_github.png";
import Footer from "../../components/Footer";

const Jmi = () => {
  const { education, infos, experiences, awards }  = ResumeData;

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
              {infos.map((info, idx) => (
                <InfoDescription key={idx}>{info}</InfoDescription>
              ))}
            </ul>
            
          </DescriptionContainer>

        </InfoContainer>

        {/* 이력서 자세히 보기 */}
        <MoreResumeContainer>
          <Link
            to="https://drive.google.com/file/d/1BIx2buYQIiaQkHGYX_R2sIID3eVN9oaK/view?usp=sharing"
            style={{
              textDecoration: 'none',
            }}
            target="_blank">
            <MoreResumeBtn>🔗 이력서 자세히 보기 (Click!)</MoreResumeBtn>
          </Link>
        </MoreResumeContainer>

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
  margin-bottom: 15px;
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
const InfoTextEmail = styled.div`
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 10px;
  margin-left: 6px;
  user-select: text;
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
  margin-top: 15px;
  padding-bottom: 26px;
`;

// 포트폴리오 Title
const PfTitleContainer = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  margin: 24px 32px 0px 32px;
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
  margin: 12px 36px 10px 36px;
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
  margin: 22px 32px 10px 38px;
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
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 15px;
`;
const AwardResult = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
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

const MoreResumeContainer = styled.div`
  margin: auto;
`;
const MoreResumeBtn = styled.div`
  margin: auto;
  padding: 5px 14px 6px 14px;
  border-radius: 99px;
  border: 2px solid ${palette.mainColor};
  background: ${palette.white};
  color: ${palette.gray3C};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  font-family: GmarketSansTTFMedium;
  cursor: pointer;
`;

export default Jmi;