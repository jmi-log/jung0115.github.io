// YOLO를 이용한 객체 인식
import styled from "styled-components";
import palette from "../../styles/colorPalette";

const YoloChap1 = () => {
  return (
    <Container>
      <Title>[ YOLO ] Chap 01. YOLO를 이용한 객체 인식</Title>
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

export default YoloChap1;