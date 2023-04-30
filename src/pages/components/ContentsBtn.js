import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

const ContentsBtn = ({linkTo, iconSrc, contentName}) => {
  return(
    <Link
      to={linkTo}
      style={{
        textDecoration: "none",
      }}>
      <Content>
        <ContentIcon src={iconSrc}/>
        <ContentName>{contentName}</ContentName>
      </Content>
    </Link>
  );
}

const Content = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  align-items: center;
  justify-content : center;
  padding: 0.5rem 1rem;
  margin-bottom: 14px;
  border: 2px solid ${palette.mainColor};
  border-radius: 10px;
`;

const ContentIcon = styled.img`
  width: 1.5rem;
  height: auto;
  margin-right: 10px;
`;

const ContentName = styled.div`
  font-size: 1.5rem;
  font-family: 'omyu_pretty';
  color: ${palette.mainColor};
`;

export default ContentsBtn;