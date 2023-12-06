// 메뉴 버튼들
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";
import palette from "../../styles/colorPalette";

import SelectMenuBtn from "../../components/menu/SelectMenuBtn";
import UnselectMenuBtn from "../../components/menu/UnselectMenuBtn";

const Menus = ({ selectMenuApp, onSelectHome, onSelectJmi }) => {
  const navigate = useNavigate();

  const menus = ["home", "jmi", "posts"];

  const [selectMenu, setSelectMenu] = useState(selectMenuApp);

  const onSelectMenu = (menu) => {
    setSelectMenu(menu);

    if(menu == "home") {
      navigate(`/`);
      onSelectHome();
    }
    else if(menu == "jmi") {
      navigate(`/jmi`);
      onSelectJmi();
    }
  }

  useEffect(() => {
    setSelectMenu(selectMenuApp);
  }, [selectMenuApp]);

  useEffect(() => {
    if(selectMenu == "home") {
      navigate(`/`);
      onSelectHome();
    }
    else if(selectMenu == "jmi") {
      navigate(`/jmi`);
      onSelectJmi();
    }
  }, [selectMenu]);

  return (
    <Container>
      {menus.map((menu, idx) =>  (
        <div
          onClick={() => onSelectMenu(menu)}>
        {menu == selectMenu ?
          <SelectMenuBtn
            key={idx}
            menuName={menu}/>
        : <UnselectMenuBtn
            key={idx}
            menuName={menu} />
        }
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 48px;
  position: absolute;
`;

export default Menus;