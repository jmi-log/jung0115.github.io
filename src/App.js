import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import './styles/App.css';
import palette from "./styles/colorPalette";

import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Menus from "./components/menu/Menus";

function App() {
  return (
    <Container>
      <Router>
        {/* 헤더: 블로그 타이틀 */}
        <Header />

        <MainContent>
          {/* 컨텐츠 내용 */}
          <Contents>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Contents>

          {/* 메뉴 버튼 */}
          <Menus/>

        </MainContent>

        {/* 푸터: 시작 날짜 */}
        <Footer />
      </Router>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100vh;
  height: auto;
  background: ${palette.background};
`;

const MainContent = styled.div`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  position: relative;
  margin: 0vh 40px;
  top: -20px;
`;

const Contents = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  margin-top: 20px;
`;

export default App;
