import { useState } from 'react';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import Nav from './Nav';

const Menu = () => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={hide}>
      <MenuWrap>
        <Wrap onClick={() => setVisible(!visible)}>
          {visible ? <IoCloseSharp /> : <IoMenuSharp />}
        </Wrap>
        <Nav visible={visible} />
      </MenuWrap>
    </OutsideClickHandler>
  );
};

const MenuWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 30px;
  background-color: ${(props) => props.theme.iconBg};
  color: ${(props) => props.theme.textColor2};

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 25px;
  }
`;

export default Menu;
