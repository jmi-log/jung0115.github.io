// 포트폴리오 아이템
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import MoreContentsBtn from "../MoreContentsBtn";

const PortfolioItem = ({ content }) => {
  // 기술 상위 4개까지만 보여주기
  const skillsMain = content.skills.slice(0, 4);

  return(
    <Container>
      <Content
        backgroundColor={content.backgroundColor}>
        <ThumbnailImg src={content.thumbnailUrl}/>

        <Title>{content.title}</Title>

        <Period>{content.period}</Period>

        <Skills>
          {skillsMain.map((skillName, idx) => (
            <Skill key={idx}>{skillName}</Skill>
          ))}
        </Skills>
        
        <Goals>
          {content.goals.map((goal, idx) => (
            <Goal key={idx}>{goal}</Goal>
          ))}
        </Goals>
        
        <MoveToDetail>
          <Link
            to="/portfolio-detail"
            style={{
              textDecoration: "none",
            }}>
            <MoreContentsBtn
              text={"자세히 보기"}/>
          </Link>
        </MoveToDetail>

      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: ${100.0 / 3.0}%;
  font-family: GmarketSansTTFMedium;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 10px;
  padding: 15px;
  background: ${(props) => props.backgroundColor || palette.portfolioBackground};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
`;

// 썸네일 이미지
const ThumbnailImg = styled.img`
  flex: 1;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const Title = styled.div`
  display: inline-block;
  color: ${palette.gray3C};
  font-size: 16px;
  padding: 4px 10px;
  margin: 12px 0px 0px 6px;
  background: ${palette.white};
  border-radius: 99px;
`;

const Period = styled.div`
  color: ${palette.gray3C};
  font-size: 13px;
  margin: 12px 0px 0px 8px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 6px;
`;
const Skill = styled.div`
  color: ${palette.gray3C};
  font-size: 13px;
  padding: 4px 6px 3px 6px;
  margin: 4px 0px 0px 6px;
  background: ${palette.portfolioSkill};
  border-radius: 5px;
`;

const Goals = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4px;
`;
const Goal = styled.div`
  display: inline-block;
  color: ${palette.gray3C};
  font-size: 13px;
  padding: 3px 6px 4px 6px;
  margin: 4px 0px 0px 6px;
  background: ${palette.white};
  border-radius: 5px;
`;

const MoveToDetail = styled.div`
  margin: 10px 5px 0px auto;
`;

export default PortfolioItem;