import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import styled from "styled-components";
import './styles/App.css';
import palette from "./styles/colorPalette";

import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Menus from "./components/menu/Menus";
import Jmi from "./pages/jmi/Jmi";

function App() {
  const [selectMenu, setSelectMenu] = useState("home");

  const onSelectHome = () => {
    setSelectMenu("home");
  }

  const onSelectJmi = () => {
    setSelectMenu("jmi");
  }

  useEffect(() => {
  }, [selectMenu]);

  return (
    <Container>
      <Router>
        {/* 헤더: 블로그 타이틀 */}
        <Header />

        <MainContent>
          {/* 컨텐츠 내용 */}
          <Contents>
            <Routes>
              <Route path="/" element={<Home onSelectJmi={onSelectJmi} />} />
              <Route path="/jmi" element={<Jmi />} />
            </Routes>
          </Contents>

          {/* 메뉴 버튼 */}
          <Menus
            onSelectHome={onSelectHome}
            onSelectJmi={onSelectJmi}
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
