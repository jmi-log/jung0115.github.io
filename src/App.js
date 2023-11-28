import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import './styles/App.css';
import palette from "./styles/colorPalette";

import Header from "./pages/home/Header";
import Home from "./pages/home/Home";
import Footer from "./pages/home/Footer";

function App() {
  return (
    <Container>
      <Router>
        {/* 헤더: 블로그 타이틀 */}
        <Header />

        <Contents>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Contents>

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
  background: ${palette.background};
`;
const Contents = styled.div`
  height: auto;
  flex: 1;
  margin: 0vh 40px;
`;

export default App;
