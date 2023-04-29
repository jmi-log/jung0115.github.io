import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import './styles/App.css';
import Header from "./pages/home/Header";
import Home from "./pages/home/Home";
import Footer from "./pages/home/Footer";
import Yolo from "./pages/yolo/Yolo";
import YoloChap1 from "./pages/yolo/YoloChap1";
import YoloChap2 from "./pages/yolo/YoloChap2";

function App() {
  return (
    <div style={{ margin: "6vh 10vw" }}>
      <Router>
        <Header />

        <Contents>
          <Routes>
            <Route path="/yolo" element={<Yolo />} />
            <Route path="/yolo/chap1" element={<YoloChap1 />} />
            <Route path="/yolo/chap2" element={<YoloChap2 />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Contents>

        <Footer />
      </Router>
    </div>
  );
}

const Contents = styled.div`
  height: auto;
  margin: 4vh 5vw;
`;

export default App;
