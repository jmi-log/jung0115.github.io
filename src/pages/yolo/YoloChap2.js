// 이미지 데이터 분석/AI 프로젝트
import styled from "styled-components";
import palette from "../../styles/colorPalette";

const YoloChap2 = () => {
  return (
    <Container>
      <Title>[ YOLO ] Chap 02. 이미지 데이터 분석/AI 프로젝트</Title>
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

export default YoloChap2;