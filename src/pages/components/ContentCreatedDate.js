import styled from "styled-components";
import palette from "../../styles/colorPalette";

const ContentCreatedDate = ({date}) => {
  return (
    <Date>created&nbsp;&nbsp;|&nbsp;&nbsp;{date}</Date>
  );
}

const Date = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: 4vw;
  font-size: 1rem;
  font-family: 'omyu_pretty';
  color: ${palette.darkGray};
`;

export default ContentCreatedDate;