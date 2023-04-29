// YOLO를 이용한 객체 인식
import styled from "styled-components";
import palette from "../../styles/colorPalette";

const YoloChap1 = () => {
  return (
    <Container>
      <Title>[ YOLO ] Chap 01. YOLO를 이용한 객체 인식</Title>
      <Date>created&nbsp;&nbsp;|&nbsp;&nbsp;2023.04.30.Sun</Date>
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

const Date = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: 14vw;
  font-size: 1rem;
  font-family: 'omyu_pretty';
  color: ${palette.darkGray};
`;

export default YoloChap1;