// 게시글 해시태그
import styled from "styled-components";
import palette from "../../styles/colorPalette";

const PostHashTag = ({ tag }) => {
  return (
    <Container>
      <HashTag># {tag}</HashTag>
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  width: fit-content;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 6px 9px;
  background: ${palette.white};
  border-radius: 20px;
`;
const HashTag = styled.div`
  font-family: GmarketSansTTFMedium;
  color: ${palette.gray65};
  font-size: 14px;
`;

export default PostHashTag;