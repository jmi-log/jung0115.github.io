import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import numOne from "../../images/ic_number_white_1.png";
import numTwo from "../../images/ic_number_white_2.png";

const Yolo = () => {
  return (
    <Container>
      <Title>[ YOLO ]</Title>
      <Link
        to="/yolo/chap1"
        style={{
          textDecoration: "none",
        }}>
        <Content>
          <ContentIcon src={numOne}/>
          <ContentName>YOLO를 이용한 객체 인식</ContentName>
        </Content>
      </Link>
      <Link
        to="/yolo/chap2"
        style={{
          textDecoration: "none",
        }}>
        <Content>
          <ContentIcon src={numTwo}/>
          <ContentName>이미지 데이터 분석/AI 프로젝트</ContentName>
        </Content>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content : center;
`;

const Title = styled.div`
  width: fit-content;
  margin: auto;
  margin-bottom: 20px;
  font-size: 2rem;
  font-family: 'omyu_pretty';
  color: ${palette.black};
`;

const Content = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  align-items: center;
  justify-content : center;
  padding: 0.5rem 1rem;
  margin-bottom: 14px;
  background-color: ${palette.mainColor};
  border-radius: 10px;
`;

const ContentIcon = styled.img`
  width: 2vw;
  height: auto;
  margin-right: 10px;
`;

const ContentName = styled.div`
  font-size: 1.5rem;
  font-family: 'omyu_pretty';
  color: ${palette.white};
`;

export default Yolo;