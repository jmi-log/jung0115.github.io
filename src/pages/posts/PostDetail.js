// 게시물 세부
import { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import Footer from "../../components/Footer";
import Markdown from "../../lib/markdown/Markdown";
import PostHashTag from "../../components/post/PostHashTag";

import shareIcon from "../../icons/ic_share.png";
import postUngoodIcon from "../../icons/ic_good_unselected.png";
import postGoodIcon from "../../icons/ic_good_selected.png";
import postPreviousIcon from "../../icons/ic_post_previous.png";
import postNextIcon from "../../icons/ic_post_next.png";

const PostDetail = () => {
  const postText = `### Test
  - test1111
  - test2222  
  게시글 마크다운
  
  - [x] test3333  
  디자인이 망쳐져서 다른 방법을 찾을 필요가...`;

  const [isGood, setIsGood] = useState(false);

  useEffect(() => {
  }, [isGood]);

  return (
    <ContentFooter>
      <Container>
        {/* 게시글 본문 */}
        <PostContainer>
          {/* 제목 헤더 */}
          <PostTitleContainer>
            <PostTitleTop>
              {/* 제목 */}
              <PostTitleTopLeft>
                <PostCategory>App / Android Studio</PostCategory>
                <PostTitle>
                  <PostTitleText>[Android Studio] Paging</PostTitleText>
                  <PostTitleLine/>
                </PostTitle>
              </PostTitleTopLeft>
                
              {/* 공유 버튼 */}
              <PostTitleTopRight>
                <PostShareBtn src={shareIcon}/>
              </PostTitleTopRight>
            </PostTitleTop>

            {/* 작성일, 조회수 */} 
            <PostTitleBottom>
              <PostDate>2023.09.01. 22:08</PostDate>
              <PostViewCountContainer>
                <PostViewCountText>조회수</PostViewCountText>
                <PostViewCountNum>29</PostViewCountNum>
              </PostViewCountContainer>
            </PostTitleBottom>

          </PostTitleContainer>
          <TitleBottomLine/>

          {/* 본문 내용(마크다운) */}
          <Markdown text={postText}/>

          {/* 해시태그, 도움 됐어요, 댓글 열기 */}
          <HashTagList>
            <PostHashTag tag={"안드로이드"}/>
            <PostHashTag tag={"앱 개발"}/>
          </HashTagList>
          
          <PostFunBtns>
            {isGood ?
              <PostGoodBtn
                onClick={() => setIsGood(false)}>
                <PostGoodIcon
                  src={postGoodIcon}/>
                <PostGoodText>도움됐어요</PostGoodText>
                <PostGoodCount>1</PostGoodCount>
              </PostGoodBtn>
              :
              <PostUngoodBtn
                onClick={() => setIsGood(true)}>
                <PostGoodIcon
                  src={postUngoodIcon}/>
                <PostGoodText>도움됐어요</PostGoodText>
                <PostGoodCount>0</PostGoodCount>
              </PostUngoodBtn>
            }
            
          </PostFunBtns>

          <PostBottomLine />

          {/* 댓글 리스트 */}

          {/* 이전글, 다음글 이동 버튼 */}
          <PostMoveBtns>
            <PostPreviousBtn>
              <PostMoveIcon
                src={postPreviousIcon}/>
              <PostPreviousText>
                <PostPreviousLabel>이전 글</PostPreviousLabel>
                <PostMoveTitle>이전 글로 이동합시다.</PostMoveTitle>
              </PostPreviousText>
            </PostPreviousBtn>

            <PostNextBtn>
              <PostNextText>
                <PostNextLabel>다음 글</PostNextLabel>
                <PostMoveTitle>다음 글로 이동합시다.</PostMoveTitle>
              </PostNextText>
              <PostMoveIcon
                src={postNextIcon}/>
            </PostNextBtn>
          </PostMoveBtns>

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
  padding: 82px 43px 40px 46px;
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
  margin-bottom: 36px;
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
  margin-left: 22px;
  margin-bottom: 16px;
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
  cursor: pointer;
`;
const PostDate = styled.div`
  color: ${palette.gray82};
  font-size: 13px;
`;
const PostViewCountContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 20px;
`;
const PostViewCountText = styled.div`
  color: ${palette.gray82}; 
  font-size: 13px;
`;
const PostViewCountNum = styled.div`
  color: ${palette.mainColor};
  font-size: 13px;
  margin-left: 5px;
`;

const HashTagList = styled.div`
  display: flex;
  margin-top: 16px;
`;
const PostFunBtns = styled.div`
  display: flex;
  margin-top: 18px;
`;
const PostUngoodBtn = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 20px;
  border: 1px solid ${palette.mainColor};
  padding: 9px 15px;
  cursor: pointer;
`;
const PostGoodBtn = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 20px;
  border: 1px solid ${palette.mainColor};
  padding: 9px 15px;
  background: ${palette.boxBackground};
  cursor: pointer;
`;
const PostGoodIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;
const PostGoodText = styled.div`
  color: ${palette.gray65};
  font-size: 15px;
  margin-right: 5px;
`;
const PostGoodCount = styled.div`
  color: ${palette.mainColor};
  font-size: 15px;  
`;

const PostBottomLine = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background: ${palette.gray82};
  margin: 22px 0px;
`;

const PostMoveBtns = styled.div`
  display: flex;
`;
const PostPreviousBtn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-right: 40px;
  padding: 13px 18px 14px 18px;
  border-radius: 10px;
  background: ${palette.white};
`;
const PostNextBtn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 40px;
  padding: 13px 18px 14px 18px;
  border-radius: 10px;
  background: ${palette.white};
  float: right;
`;
const PostMoveIcon = styled.img`
  width: 39px;
  height: 39px;
`;
const PostPreviousText = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostNextText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;
const PostPreviousLabel = styled.div`
  color: ${palette.gray70};
  font-size: 17px;
  margin: 0px 15px 3px 15px;
`;
const PostNextLabel = styled.div`
  color: ${palette.gray70};
  font-size: 17px;
  margin: 0px 15px 3px auto;
`;
const PostMoveTitle = styled.div`
  color: ${palette.gray3C};
  font-size: 16px;
  margin: 0px 15px;
`;

const CategoryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


export default PostDetail;