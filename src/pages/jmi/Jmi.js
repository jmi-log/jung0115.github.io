// 자기소개 페이지
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import organizationIcon from "../../icons/ic_info_organization.png";
import emailIcon from "../../icons/ic_info_email.png";
import githubIcon from "../../icons/ic_info_github.png";
import Footer from "../../components/Footer";

const Jmi = () => {
  const univ = "경상국립대학교, 컴퓨터공학과 졸업 | 2020.03 ~ 2024.08";
  const info = ["빠르게 학습하고 도전하며 안드로이드 개발 역량을 쌓고 있습니다.",
    "SW 마에스트로 15기에서 '마이꾸미' 앱을 개발하며, Compose, MVVM, 클린 아키텍처, 멀티 모듈, DI 등을 적용했습니다.",
    "UMC를 통해 약 1개월 동안 Node.js를 이용해 API 개발을 공부하고, 시니어 맞춤 구인구직 웹의 백엔드 개발을 완수한 경험도 있습니다. 처음 배우는 기술도 빠르게 습득하여 활용할 수 있는 개발자가 되고자 합니다."];
  const techStacks = [{"label": "Android |", "stack": "Android Studio, Java, Kotlin"},
    {"label": "Cross-Platform |", "stack": "React Native, JavaScript, Flutter, Dart"},
    {"label": "Web Frontend |", "stack": "React.js, JavaScript, HTML/CSS"},
    {"label": "Server |", "stack": "Node.js, JavaScript, MySQL, SQL"},
    {"label": "etc |", "stack": "Python, C, Git, Github, Firebase, OpenCV, Tensorflow"}];
  const projects = [{"name": "놀다가", "description": "3D 가상 공간 블로그 웹 서비스", "role": "WebGL, Three.js", "peroid": "2022.04 ~ 2022.11", "result1": "✅", "result2": ""},
    {"name": "개발새발", "description": "개발자를 위한 개발 기록 앱", "role": "AOS(Kotlin)", "peroid": "2022.11 ~ 2023.01", "result1": "✅", "result2": ""},
    {"name": "받장", "description": "장학금 및 지원금 조회 플랫폼", "role": "AOS(Kotlin)", "peroid": "2023.01 ~ 2023.02", "result1": "✅", "result2": ""},
    {"name": "Linkive", "description": "링크 저장 메모 플랫폼", "role": "AOS(Kotlin), React.js", "peroid": "2023.01 ~ 2023.06", "result1": "", "result2": ""},
    {"name": "IDear", "description": "Chat GPT가 귀찮은 글을 대신 작성해주는 앱", "role": "AOS(Kotlin)", "peroid": "2023.06 ~ 2023.06", "result1": "", "result2": "🏆"},
    {"name": "오다르", "description": "시니어 맞춤 구인구직 웹", "role": "Node.js", "peroid": "2023.06 ~ 2023.08", "result1": "✅", "result2": ""},
    {"name": "이루다", "description": "중장년 재취업 목표 달성 도우미", "role": "AOS(Kotlin)", "peroid": "2023.07 ~ ing", "result1": "", "result2": "🏆"},
    {"name": "Dream Quest", "description": "우울한 사람을 위한 활동 제안 서비스", "role": "React.js", "peroid": "2023.07 ~ 2023.07", "result1": "", "result2": "🏆"},
    {"name": "모우미", "description": "발달 장애인을 위한 쉬운 언어 번역 중개 서비스", "role": "React Native", "peroid": "2023.08 ~ 2023.10", "result1": "", "result2": "🏆"},
    {"name": "감자톤 주식 페이지", "description": "한림대x강원대 멋쟁이사자처럼 연합해커톤(감자톤) 주식 페이지", "role": "React.js", "peroid": "2023.09 ~ 2023.11", "result1": "✅", "result2": ""}];
  const experiences = [{"name": "SW마에스트로 15기 수료 예정", "period": "2024.04 ~ 2024.11 (8개월)"},
    {"name": "Remote Internship Program 4th Expert Track 수료", "period": "2023.09 ~ 2023.11 (3개월)"},
    {"name": "UMC 4th Node.js 파트 수료 ", "period": "2023.03 ~ 2023.08 (6개월)"},
    {"name": "UMC 3rd Android 파트 수료 ", "period": "2022.09 ~ 2023.02 (6개월)"},
    {"name": "GNU 창의융합동아리 멘토", "period": "2021.07 ~ 2021.12 (6개월)"},
    {"name": "경상국립대학교 컴퓨터공학과 인공지능 학부 연구실 ", "period": "2021.03 ~ 2022.06 (1년 6개월)"},
    {"name": "GNU 창의동아리 Big D.T 운영", "period": "2020.05 ~ 2020.07 (3개월)"},];
  const awards = [{"name": "2023 메카이브 메이커톤", "result": "우수상(3위)"},
    {"name": "2023 서울 우먼테크 해커톤", "result": "우수상(3위)"},
    {"name": "2023 HGU DREAMLAND 해커톤", "result": "장려상(5위)"},
    {"name": "2023 4th NE(O)RDINARY 해커톤", "result": "최우수상(2위)"},
    {"name": "2023 GNU 지식재산-빅데이터 경진대회", "result": "우수상"},
    {"name": "2021 GNU 빅데이터 아이디어 공모전", "result": "장려상"},
    {"name": "2020 GNU 창의동아리", "result": "우수상"},];


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

        {/* tech stack, project, award */}
        <PortfolioContainer>

          {/* Tech Stack */}

          {/* Project */}
          <PfTitleContainer>
            <PfTitle>💻 Project</PfTitle>
            <PfTitleLine/>
          </PfTitleContainer>

          <ProjectContainer>
            <ProjectLine>
              <ProjectName> <ProjectTitle>프로젝트명</ProjectTitle> </ProjectName>
              <ProjectDescription> <ProjectTitle>설명</ProjectTitle> </ProjectDescription>
              <ProjectRole> <ProjectTitle>역할</ProjectTitle> </ProjectRole>
              <ProjectPeriod> <ProjectTitle>진행 기간</ProjectTitle> </ProjectPeriod>
              <ProjectResult> <ProjectTitle>출시/수상</ProjectTitle> </ProjectResult>
            </ProjectLine>

            <ProjectTitleLine />

            {projects.map((project, idx) => (
              <>
                <ProjectLine key={idx}>
                  <ProjectName> <ProjectContent>{project.name}</ProjectContent> </ProjectName>
                  <ProjectDescription> <ProjectContent>{project.description}</ProjectContent> </ProjectDescription>
                  <ProjectRole> <ProjectContent>{project.role}</ProjectContent> </ProjectRole>
                  <ProjectPeriod> <ProjectContent>{project.peroid}</ProjectContent> </ProjectPeriod>
                  <ProjectResult> <ProjectContentResult>{project.result1}</ProjectContentResult> <ProjectContentResult>{project.result2}</ProjectContentResult> </ProjectResult>
                </ProjectLine>

                {projects.length != idx + 1 ?
                  <ProjectContentLine />
                  : <ProjectLastLine/> }
              </>
            ))}

          </ProjectContainer>

          {/* Experience */}
          <PfTitleContainer>
            <PfTitle>🔥 Experience</PfTitle>
            <PfTitleLine/>
          </PfTitleContainer>

          <ExperienceContainer>
            <ExperienceLine>
              <ExperienceName> <ExperienceTitle>활동</ExperienceTitle> </ExperienceName>
              <ExperiencePeriod> <ExperienceTitle>진행 기간</ExperienceTitle> </ExperiencePeriod>
            </ExperienceLine>
            
            <ExperienceTitleLine />

            {experiences.map((experience, idx) => (
              <>
                <ExperienceLine key={idx}>
                  <ExperienceName> <ExperienceContent>{experience.name}</ExperienceContent> </ExperienceName>
                  <ExperiencePeriod> <ExperienceContent>{experience.period}</ExperienceContent> </ExperiencePeriod>
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
                <AwardName>{award.name}</AwardName>
                <AwardResult>{award.result}</AwardResult>
              </Award>
            ))}

          </AwardContainer>

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

// Tech Stack
const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 22px 32px 0px 38px;
`;
const TechStack = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
const TechStackLabel = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 15px;
  margin-right: 6px;
`;
const TechStackText = styled.div`
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 15px;
`;

// Project
const ProjectContainer = styled.div`
  margin: 22px 36px 0px 36px;
`;
const ProjectName = styled.div`
  flex: 1.5;
`;
const ProjectDescription = styled.div`
  flex: 4;
`;
const ProjectRole = styled.div`
  flex: 2;
`;
const ProjectPeriod = styled.div`
  flex: 2;
`;
const ProjectResult = styled.div`
  flex: 1;
  display: flex;
`;
const ProjectLine = styled.div`
  display: flex;
`;
const ProjectTitle = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 15px;
  margin: 10px 14px 10px 14px;
`;
const ProjectContent = styled.div`
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 14px;
  margin: 10px 14px 10px 14px;
`;
const ProjectContentResult = styled.div`
  display: flex;
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 14px;
  margin: 10px 0px 10px 14px;
  width: 26px;
  align-self: center;
  justify-content: center;
`;
const ProjectTitleLine = styled.div`
  width: 100%;
  height: 1.5px;
  background: ${palette.gray82};
`;
const ProjectContentLine = styled.div`
  width: 100%;
  height: 0.5px;
  background: ${palette.gray82};
`;
const ProjectLastLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${palette.gray82};
`;

// Experience
const ExperienceContainer = styled.div`
  margin: 22px 36px 0px 36px;
`;
const ExperienceName = styled.div`
  flex: 8;
`;
const ExperiencePeriod = styled.div`
  flex: 3;
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
const AwardName = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 15px;
  margin-right: 6px;
`;
const AwardResult = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFBold;
  font-size: 15px;
`;

export default Jmi;