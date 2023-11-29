// 선택되지 않은 메뉴 버튼
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import unselectMenuIcon from "../../icons/ic_menu_unselected.png";

const UnselectMenuBtn = ({ menuName }) => {
  return (
    <Container>
      {/* 메뉴 이름 */}
      <MenuName>{menuName}</MenuName>

      {/* 메뉴 버튼 아이콘 */}
      <MenuIcon src={unselectMenuIcon} />

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 65px;
  flex-direction: column;
  align-items: center;
  justify-content : center;
`;

// 메뉴 이름
const MenuName = styled.div`
  font-family: 'omyu_pretty';
  font-size: 18px;
  color: ${palette.mainColor};
  padding: 6px 10px 2px 10px;
  cursor: pointer;
`;
 
// 메뉴 버튼 아이콘
const MenuIcon = styled.img`
  width: 55px;
  height: auto;
  margin-top: 2px;
  cursor: pointer;
`;

export default UnselectMenuBtn;