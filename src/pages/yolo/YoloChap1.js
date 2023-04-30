// YOLO를 이용한 객체 인식
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import ContentCreatedDate from "../components/ContentCreatedDate";

import ContentTitle from "../components/ContentTitle";

const YoloChap1 = () => {
  return (
    <Container>
      <ContentTitle
        tag = {"YOLO"}
        backTo = {"/yolo"}
        title={"Chap 01. YOLO를 이용한 객체 인식"}/>
      <ContentCreatedDate date={"2023.04.30.Sun"} />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content : center;
`;

export default YoloChap1;