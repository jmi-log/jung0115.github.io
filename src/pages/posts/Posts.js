// 게시물
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import Footer from "../../components/Footer";

import shareIcon from "../../icons/ic_share.png";

const Posts = () => {
  return (
    <ContentFooter>
      <Container>
        {/* 게시글 본문 */}
        <PostContainer>
          {/* 제목 헤더 */}
          <PostTitleContainer>
            <PostTitleTop>
              <PostTitleTopLeft>
                <PostCategory>App / Android Studio</PostCategory>
                <PostTitle>
                  <PostTitleText>[Android Studio] Paging</PostTitleText>
                  <PostTitleLine/>
                </PostTitle>
              </PostTitleTopLeft>
                
              <PostTitleTopRight>
                <PostShareBtn src={shareIcon}/>
              </PostTitleTopRight>
            </PostTitleTop>
            
            <PostTitleBottom>

            </PostTitleBottom>

          </PostTitleContainer>
          <TitleBottomLine/>

          {/* 본문 내용(마크다운) */}

          {/* 해시태그, 좋아요, 댓글 */}

          {/* 이전글, 다음글 이동 버튼 */}

        </PostContainer>

        {/* 카테고리 메뉴바 */}
        <CategoryContainer>
          카테고리
        </CategoryContainer>
      </Container>

      <Footer />
    </ContentFooter>
  );
}

const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid ${palette.mainColor};
  margin-top: 20px;
  padding: 92px 43px 38px 46px;
  font-family: GmarketSansTTFMedium;
`;

const PostContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding-right: 42px;
`;
const PostTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${palette.white};
`;
const TitleBottomLine = styled.div`
  width: 100%;
  height: 3.5px;
  background: ${palette.lightGreen};
`;
const PostTitleTop = styled.div`
  display: flex;
  margin-bottom: 32px;
`;
const PostTitleTopLeft = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;
const PostTitleTopRight = styled.div`
  flex: 1;
  display: flex;
`;
const PostTitleBottom = styled.div`
  display: flex;
  
`;
const PostCategory = styled.div`
  color: ${palette.gray65};
  font-size: 15px;
  margin: 19px 0px 20px 22px;
`;
const PostTitle = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  margin-left: 22px;
`;
const PostTitleText = styled.div`
  color: ${palette.gray3C};
  font-family: GmarketSansTTFMedium;
  font-size: 28px;
  z-index: 100;
`;
const PostTitleLine = styled.div`
  width: 100%;
  height: 15px;
  background: ${palette.highlightGreen};
  position: absolute;
  bottom: -7px;
  margin-right: auto;
`;
const PostShareBtn = styled.img`
  width: 30px;
  height: 30px;
  margin: 25px 25px 0px auto;
`;
const PostDate = styled.div`
  color: ${palette.gray82};
  font-size: 13px;
`;
const PostViewCount = styled.div`
  font-size: 13px;
`;

const CategoryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


export default Posts;