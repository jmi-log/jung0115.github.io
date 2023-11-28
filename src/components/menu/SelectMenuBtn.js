// 선택된 메뉴 버튼
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import selectMenuIcon from "../../icons/ic_menu_selected.png";

const SelectMenuBtn = ({ menuName }) => {
  return (
    <Container>
      {/* 메뉴 이름 */}
      <MenuName>{menuName}</MenuName>

      {/* 메뉴 버튼 아이콘 */}
      <MenuIcon src={selectMenuIcon} />

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
  color: ${palette.white};
  padding: 4px 10px;
  background: ${palette.lightGreen};
  border-radius: 20px;
`;
 
// 메뉴 버튼 아이콘
const MenuIcon = styled.img`
  width: 55px;
  height: auto;
  margin-top: 2px;
`;

export default SelectMenuBtn;