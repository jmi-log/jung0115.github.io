import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import ContentsBtn from "../components/ContentsBtn";
import ContentTitle from "../components/ContentTitle";

import numOne from "../../images/ic_number_green_1.png";
import numTwo from "../../images/ic_number_green_2.png";

const Yolo = () => {
  return (
    <Container>
      <ContentTitle title={"[ YOLO ]"}/>
      <ContentsBtn
        linkTo={"/yolo/chap1"}
        iconSrc={numOne}
        contentName={"YOLO를 이용한 객체 인식"} />
      <ContentsBtn
        linkTo={"/yolo/chap2"}
        iconSrc={numTwo}
        contentName={"이미지 데이터 분석/AI 프로젝트"} />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content : center;
`;

export default Yolo;