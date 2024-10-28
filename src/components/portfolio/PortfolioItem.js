// 포트폴리오 아이템
import styled from "styled-components";
import palette from "../../styles/colorPalette";

const PortfolioItem = ({ title, thumbnailUrl, skills, period, goals, backgroundColor }) => {
  return(
    <Container>
      <Content
        backgroundColor={backgroundColor}>
        <ThumbnailImg src={thumbnailUrl}/>

        <Title>{title}</Title>

        <Skills>
          {skills.map((skillName, idx) => (
            <Skill key={idx}>{skillName}</Skill>
          ))}
        </Skills>
        
        <Period>{period}</Period>
        
        <Goals>
          {goals.map((goal, idx) => (
            <Goal key={idx}>{goal}</Goal>
          ))}
        </Goals>

      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 50%;
  font-family: GmarketSansTTFMedium;
`;

const Content = styled.div`
  margin: 10px 10px;
  padding: 15px;
  background: ${(props) => props.backgroundColor || palette.portfolioBackground};
  border-radius: 8px;
  cursor: pointer;
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
  margin: 6px 0px 0px 6px;
  background: ${palette.white};
  border-radius: 99px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8px;
`;
const Skill = styled.div`
  color: ${palette.gray3C};
  font-size: 13px;
  padding: 4px 6px;
  margin: 4px 0px 0px 6px;
  background: ${palette.portfolioSkill};
  border-radius: 5px;
`;

const Period = styled.div`
  color: ${palette.gray3C};
  font-size: 13px;
  margin: 10px 0px 0px 8px;
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

export default PortfolioItem;