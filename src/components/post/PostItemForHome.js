// 게시물 리스트 아이템 - 홈 탭에서 보이는 아이템
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import dotIcon from "../../icons/ic_post_info_dot.png";

// 제목, 글 내용, 작성일, 카테고리(배열), 조회수, 이미지 URL
const PostItemForHome = ({ title, contents, date, categories, viewCount, image }) => {
  return(
    <Container>
      <Contents>
        {/* 제목 */}
        <TitleContainer>
          <Title>{title}</Title>
          <TitleLine/>
        </TitleContainer>

        {/* 내용 */}
        <ContentText>
          {contents.length <= 300 ? 
            contents
          : contents.substr(0, 300) + "..."}
        </ContentText>

        {/* 작성일, 카테고리, 조회수 */}
        <PostInfoContainer>
          <Date>{date}</Date>
          <InfoDot src={dotIcon}/>

          {categories.map((category, idx) => (
            <>
              <Category>{category}</Category>
              <InfoDot src={dotIcon}/>
            </>
          ))}

          <ViewCount>{viewCount}</ViewCount>

        </PostInfoContainer>

      </Contents>

      {/* 썸네일 */}
      <ThumbnailImg src={image}/>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 30px 21px 0px 19px;
`;

const Contents = styled.div`
  flex: 4.8;
  font-family: GmarketSansTTFMedium;
`;

// 제목
const TitleContainer = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  cursor: pointer;
`;
const TitleLine = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  background: ${palette.highlightGreen};
  bottom: 0px;
  margin-right: auto;
`;
const Title = styled.div`
  color: ${palette.gray3C};
  font-size: 17px;
  z-index: 100;
  padding: 0px 2px 4px 2px;
`;

// 내용
const ContentText = styled.div`
  margin-top: 13px;
  margin-right: 49px;
  color: ${palette.gray70};
  font-size: 14px;
`;

// 작성일, 카테고리, 조회수
const PostInfoContainer = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 11px;
  align-items: center;
  cursor: default;
`;
const Date = styled.div`
  color: ${palette.gray82};
`;
const Category = styled.div`
  color: ${palette.gray65};
`;
const ViewCount = styled.div`
  color: ${palette.gray82};
`;

const InfoDot = styled.img`
  width: 5.5px;
  height: 5.5px;
  margin: 0px 7.5px;
`;

// 썸네일 이미지
const ThumbnailImg = styled.img`
  flex: 1;
  width: 600px;
  height: 130px;
  object-fit: cover;
`;

export default PostItemForHome;
