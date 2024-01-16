// 헤더
import styled from "styled-components";
import palette from "../styles/colorPalette";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import logo from "../icons/ic_logo.png";

const Header = ({ onSelectHome }) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(`/`);
    onSelectHome();
  }

  return (
    <Container>
      <LogoIcon
        onClick={navigateHome}
        src={logo} />
      <Title
        onClick={navigateHome}>
        jmi.log
      </Title>
      <Hr />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  align-items: center;
  justify-content : center;
  text-align: center;
`;

const LogoIcon = styled.img`
  width: 2.4rem;
  height: auto;
  margin-top: 3vh;
  margin-bottom: 5px;
  cursor: pointer;
`;

const Title = styled.div`
  width: fit-content;
  margin: auto;
  font-size: 2.3rem;
  font-family: 'omyu_pretty';
  color: ${palette.black};
  cursor: pointer;
`;

const Hr = styled.hr`
  width: 7rem;
  background: ${palette.black};
`;

export default Header;