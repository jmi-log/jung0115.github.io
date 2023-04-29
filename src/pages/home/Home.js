import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import icYOLO from "../../images/ic_yolo.png";

const Home = () => {
  return(
    <Container>
      <Link
        to="/yolo"
        style={{
          textDecoration: "none",
        }}>
        <Category>
          <CategoryIcon src={icYOLO}/>
          <CategoryName>YOLO</CategoryName>
        </Category>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
  padding: 0.5rem 1rem;
  margin-bottom: 14px;
  background-color: ${palette.mainColor};
  border-radius: 10px;
`;

const CategoryIcon = styled.img`
  width: 2vw;
  height: auto;
  margin-right: 10px;
`;

const CategoryName = styled.div`
  font-size: 1rem;
  font-family: 'omyu_pretty';
  color: ${palette.white};
`;

export default Home;