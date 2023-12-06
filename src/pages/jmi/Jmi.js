// 자기소개 페이지
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import organizationIcon from "../../icons/ic_info_organization.png";
import emailIcon from "../../icons/ic_info_email.png";
import githubIcon from "../../icons/ic_info_github.png";
import MoreContentsBtn from "../../components/MoreContentsBtn";
import PostItem from "../../components/PostItem";
import Footer from "../../components/Footer";

const Jmi = () => {
  const univ = "경상국립대학교, 컴퓨터과학부\n컴퓨터과학전공 재학 | 2020.03 ~";
  const info = "Kotlin 기반의 안드로이드 앱 개발을 주로 하고 있지만, 크로스 플랫폼과 AI, 데이터 분석에도 관심을 갖고 공부합니다. 약 1년 반 동안 인공지능 학부 연구실 생활을 하며 AI 학습을 진행하였고, Remote Internship을 통해 데이터 분석 학습하고 있습니다.\n\n"
    + "프로젝트에서 다른 분야의 담당자들과 소통하는 것을 중요하게 생각합니다. 앱 개발 뿐만 아니라 디자인, 기획, 백엔드 지식을 갖춰 각 담당자들과 소통하는 역량을 기르는 중입니다\n\n"
    + "서비스 완성 뿐만 아니라 기술을 온전히 습득하고 직접 구현할 수 있는 능력을 얻는 것에 목표를 두었습니다. 이를 위해 기능과 방법을 이해한 뒤에 구현으로 옮기려고 하고 있습니다. 이전에 구현해본 적 없는 기능이나 다른 방법이 있는 부분에 대해서도 적극적으로 도전하려고 합니다."
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

  return(
    <ContentFooter>
      <Container>
        {/* 자기소개 */}
        <InfoContainer>
          <ProfileContainer>
          <ProfileImg src="https://avatars.githubusercontent.com/u/76805879?v=4" />

            <ContentGroup>
              <Info>
                <InfoIcon src={organizationIcon}/>
                <InfoText>{univ}</InfoText>
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
          </ProfileContainer>

          <InfoHr/>

          <DescriptionContainer>
            <InfoContent>
              <TitleContainer>
                <InfoTitle>👋🏻 안녕하세요, 안드로이드 앱 개발자를 꿈꾸는 조정미입니다.</InfoTitle>
                <TitleHr />
              </TitleContainer>
            </InfoContent>

            <InfoDescription>{info}</InfoDescription>
          </DescriptionContainer>

        </InfoContainer>

        {/* tech stack, project, award */}
        <PortfolioContainer>
          {/* Tech Stack */}
          <PfTitleContainer>
            <PfTitle>🛠️ Tech Stack</PfTitle>
            <PfTitleLine/>
          </PfTitleContainer>

          <TechStackContainer>
            <TechStack>
              <TechStackLabel>Android | </TechStackLabel>
              <TechStackText>Android Studio, Java, Kotlin</TechStackText>
            </TechStack>
            <TechStack>
              <TechStackLabel>Cross-Platform | </TechStackLabel>
              <TechStackText>React Native, JavaScript, Flutter, Dart</TechStackText>
            </TechStack>
            <TechStack>
              <TechStackLabel>Web Frontend | </TechStackLabel>
              <TechStackText>React.js, JavaScript, HTML/CSS</TechStackText>
            </TechStack>
            <TechStack>
              <TechStackLabel>Server | </TechStackLabel>
              <TechStackText>Node.js, JavaScript, MySQL, SQL</TechStackText>
            </TechStack>
            <TechStack>
              <TechStackLabel>etc | </TechStackLabel>
              <TechStackText>Python, C, Git, Github, Firebase, OpenCV, Tensorflow</TechStackText>
            </TechStack>
          </TechStackContainer>

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
                <ProjectLine>
                  <ProjectName> <ProjectContent>{project.name}</ProjectContent> </ProjectName>
                  <ProjectDescription> <ProjectContent>{project.description}</ProjectContent> </ProjectDescription>
                  <ProjectRole> <ProjectContent>{project.role}</ProjectContent> </ProjectRole>
                  <ProjectPeriod> <ProjectContent>{project.peroid}</ProjectContent> </ProjectPeriod>
                  <ProjectResult> <ProjectContentResult>{project.result1}</ProjectContentResult> <ProjectContentResult>{project.result2}</ProjectContentResult> </ProjectResult>
                </ProjectLine>

                <ProjectContentLine />
              </>
            ))}

          </ProjectContainer>

          {/* Award */}

        </PortfolioContainer>

      </Container>

      <Footer/>
    </ContentFooter>
  );
}

const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 26px 0px 0px 20px;
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
const InfoDescription = styled.div`
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 15px;
  white-space: pre-line;
  margin: 18px 24px 0px 22px;
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
  margin: 22px 32px 10px 38px;
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
  font-size: 16px;
`;

// Project
const ProjectContainer = styled.div`
  margin: 18px 36px 0px 36px;
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


export default Jmi;