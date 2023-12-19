// 게시물
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import MoreContentsBtn from "../../components/MoreContentsBtn";
import PostItem from "../../components/PostItem";

const Posts = () => {
  return (
    <ContentFooter>
      <Container>
        {/* 게시글 리스트 */}
        <PostContainer>
          {/* 전체 글 or 선택된 카테고리 */}
          <AllPostHeader>
            <AllPostTitle>전체 글</AllPostTitle>
            <AllPostCounts>2</AllPostCounts>
            {/* 정렬 버튼 */}
            {/*<MorePostBtn>
              <MoreContentsBtn text={"더보기"}/>
            </MorePostBtn>*/}
          </AllPostHeader>

          <AllPostHr/>

          <PostList>
            <Link
              to="/post-detail"
              style={{
                textDecoration: "none"
              }}>
              <PostItem
                title={"[Android Studio] Paging"}
                contents={"Android Developer 사이트를 구경하다가 Paging이라는 걸 발견했다. Recyclerview에서 데이터를 페이지로 끊어서 가져올 수 있는 것 같다. 표시해야 할 데이터가 많아서 스크롤이 작아지고 화면이 길어지면 그 데이터를 다 불러올 동안 로딩 시간이 너무 많이 걸리게 된다. 이전에 참여한 앱 프로젝트에서 이런 경우가 있었는데 당시에는 다른 기능을 빨리 마무리해야 해서 해결을 못하고 넘어갔지만 이 방법을 적용하면 될 것 같다.\n\n\n\n\n지금 졸업작품으로 만들고 있는 앱에도 이게 도움이 될 것 같다. 해당 부분에 적용해봐야겠다."}
                date={"2023.09.01 "}
                categories={["App", "Android Studio"]}
                viewCount={29}
                image={"https://github.com/jung0115/jung0115/assets/76805879/686139a2-c6fd-46c8-a3b2-657f4e3f3373"}/>
            </Link>
            
            <Link
              to="/post-detail"
              style={{
                textDecoration: "none"
              }}>
              <PostItem
                title={"[Android Studio] Paging"}
                contents={"Android Developer 사이트를 구경하다가 Paging이라는 걸 발견했다. Recyclerview에서 데이터를 페이지로 끊어서 가져올 수 있는 것 같다. 표시해야 할 데이터가 많아서 스크롤이 작아지고 화면이 길어지면 그 데이터를 다 불러올 동안 로딩 시간이 너무 많이 걸리게 된다. 이전에 참여한 앱 프로젝트에서 이런 경우가 있었는데 당시에는 다른 기능을 빨리 마무리해야 해서 해결을 못하고 넘어갔지만 이 방법을 적용하면 될 것 같다.\n\n\n\n\n지금 졸업작품으로 만들고 있는 앱에도 이게 도움이 될 것 같다. 해당 부분에 적용해봐야겠다."}
                date={"2023.09.01 "}
                categories={["App", "Android Studio"]}
                viewCount={29}
                image={"https://github.com/jung0115/jung0115/assets/76805879/686139a2-c6fd-46c8-a3b2-657f4e3f3373"}/>
            </Link>
          </PostList>

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
  padding: 92px 42px 38px 35px;
  font-family: GmarketSansTTFMedium;
`;

const PostContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding-right: 42px;
`;
const AllPostHeader = styled.div`
  display: flex;
`;
const AllPostTitle = styled.div`
  color: ${palette.gray3C};
  font-size: 20px;
  margin-left: 17px;
  margin-bottom: 12px;
  cursor: default;
`;
const AllPostCounts = styled.div`
  color: ${palette.mainColor};
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 12px;
  cursor: default;
`;
const MorePostBtn = styled.div`
  margin: 0px 26px 18px auto;
  cursor: pointer;
`;
const AllPostHr = styled.hr`
  width: auto;
  height: 1.5px;
  border: 0px;
  background: ${palette.gray70};
  margin: 0px 5px;
`;
const PostList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4px;
`;

const CategoryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


export default Posts;