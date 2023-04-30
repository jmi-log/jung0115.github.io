import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

const ContentTitle = ({tag, backTo, title}) => {
  return(
    <Title>
      {tag != null ? 
      <Link
        to={backTo}
        style={{
          color: palette.deepDarkGray,
          textDecoration: "none",
        }}>
        [{tag}]&nbsp;
      </Link>
      : null}
      {title}
    </Title>
  );
}

const Title = styled.div`
  width: fit-content;
  margin: auto;
  margin-bottom: 20px;
  font-size: 2rem;
  font-family: 'omyu_pretty';
  color: ${palette.deepDarkGray};
`;

export default ContentTitle;