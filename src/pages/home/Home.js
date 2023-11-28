import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";
import Menus from "../../components/menu/Menus";


const Home = () => {
  return(
    <Container>
      <Menus />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

export default Home;