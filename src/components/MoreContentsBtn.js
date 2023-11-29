// 더보기, 더 자세히 보기
import styled from "styled-components";
import palette from "../styles/colorPalette";

import moreContensIcon from "../icons/ic_more_contents.png";

const MoreContentsBtn = ({ text }) => {
  return(
    <Container>
      <MoreText>{text}</MoreText>
      <MoreIcon src={moreContensIcon}/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const MoreText = styled.div`
  color: ${palette.gray65};
  font-family: GmarketSansTTFMedium;
  font-size: 14px;
  margin-right: 10px;
`;
const MoreIcon = styled.img`
  width: 10.5px;
  height: 15.59px;
`;

export default MoreContentsBtn;