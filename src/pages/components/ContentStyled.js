import styled from "styled-components";
import palette from "../../styles/colorPalette";

const ContentSubTitle = styled.div`
  width: fit-content;
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-family: 'omyu_pretty';
  color: ${palette.deepDarkGray};
`;

const ContentSubSubTitle = styled.div`
  width: fit-content;
  margin-bottom: 10px;
  font-size: 1.4rem;
  font-family: 'omyu_pretty';
  color: ${palette.deepDarkGray};
`;

const ContentText = styled.div`
  width: fit-content;
  margin-bottom: 10px;
  font-size: 1.3rem;
  font-family: 'omyu_pretty';
  color: ${palette.deepDarkGray};
`;

export { ContentSubTitle, ContentSubSubTitle, ContentText };