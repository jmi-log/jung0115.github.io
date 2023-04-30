// 이미지 데이터 분석/AI 프로젝트
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import ContentTitle from "../components/ContentTitle";

const YoloChap2 = () => {
  return (
    <Container>
      <ContentTitle
        tag = {"YOLO"}
        backTo = {"/yolo"}
        title = {"Chap 02. 이미지 데이터 분석/AI 프로젝트"}/>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content : center;
`;

export default YoloChap2;