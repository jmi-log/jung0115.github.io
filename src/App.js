import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import styled from "styled-components";
import './styles/App.css';
import palette from "./styles/colorPalette";

import Header from "./components/Header";
import Home from "./pages/home/Home";
import Menus from "./components/menu/Menus";
import Jmi from "./pages/jmi/Jmi";
import Portfolio from "./pages/portfolio/Portfolio";
import Posts from "./pages/posts/Posts";
import PostDetail from "./pages/posts/PostDetail";

function App() {
  const [selectMenu, setSelectMenu] = useState("home");

  const onSelectHome = () => {
    setSelectMenu("home");
  }

  const onSelectJmi = () => {
    setSelectMenu("jmi");
  }

  const onSelectPortfolio = () => {
    setSelectMenu("portfolio");
  }

  const onSelectPosts = () => {
    setSelectMenu("posts");
  }

  useEffect(() => {
  }, [selectMenu]);

  return (
    <Container>
      <Router>
        {/* 헤더: 블로그 타이틀 */}
        <Header
          onSelectHome={onSelectHome}/>

        <MainContent>
          {/* 컨텐츠 내용 */}
          <Contents>
            <Routes>
              <Route path="/" element={<Home onSelectJmi={onSelectJmi} onSelectPosts={onSelectPosts} onSelectPortfolio={onSelectPortfolio} />} />
              <Route path="/jmi" element={<Jmi />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/post-detail" element={<PostDetail />} />
            </Routes>
          </Contents>

          {/* 메뉴 버튼 */}
          <Menus
            onSelectHome={onSelectHome}
            onSelectJmi={onSelectJmi}
            onSelectPosts={onSelectPosts}
            onSelectPortfolio={onSelectPortfolio}
            selectMenuApp={selectMenu}/>

        </MainContent>

      </Router>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
  background: ${palette.background};
  user-select: none;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  position: relative;
  margin: 0vh 40px;
  top: -20px;
`;

const Contents = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  min-height: 100%;
  margin-top: 20px;
`;

export default App;
