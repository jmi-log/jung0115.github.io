// YOLO를 이용한 객체 인식
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import ContentCreatedDate from "../components/ContentCreatedDate";
import { ContentSubTitle, ContentSubSubTitle, ContentText } from "../components/ContentStyled";

import ContentTitle from "../components/ContentTitle";

const YoloChap1 = () => {
  return (
    <Container>
      <ContentTitle
        tag = {"YOLO"}
        backTo = {"/yolo"}
        title={"Chap 01. YOLO를 이용한 객체 인식"}/>
      <ContentCreatedDate date={"2023.04.30.Sun"} />

      <ContentSubTitle>01. OpenCV로 배우는 영상 처리</ContentSubTitle>
      <ContentSubSubTitle>[이론1] 영상 처리와 컴퓨터 비전</ContentSubSubTitle>
      <ContentText>
      - 영상 처리란?<br/>
      : 입력 영상을 원하는 목적 영상으로 만들거나, 영상의 특성을 얻어내는 것<br/>
      <br/>
      &lt; 저수준 영상 처리와 고수준 영상 처리 &gt;<br/>
      - 저수준 영상 처리<br/>
      : 출력의 결과가 영상. 영상 개선, 영상 복원, 영상 분석, 영상 압축 등<br/>
      - 고수준 영상 처리<br/>
      : 출력의 결과가 영상의 특성 또는 영상을 해석한 결과. 영상 인식, 특징 추출, 영상 분할 등<br/>
      <br/>
      
      </ContentText>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content : center;
`;

export default YoloChap1;