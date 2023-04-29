import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import './styles/App.css';
import Header from "./pages/home/Header";
import Home from "./pages/home/Home";
import Footer from "./pages/home/Footer";
import Yolo from "./pages/yolo/Yolo";

function App() {
  return (
    <div style={{ margin: "6vh 10vw" }}>
      <Router>
        <Header />
        
        <Contents>
          <Routes>
            <Route path="/yolo" element={<Yolo />} />
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
