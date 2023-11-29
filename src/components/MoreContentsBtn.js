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
  margin-right: 8px;
`;
const MoreIcon = styled.img`
  width: 8.4px;
  height: 12.47px;
`;

export default MoreContentsBtn;