import { IoAlbumsOutline, IoTrashOutline } from 'react-icons/io5';
import styled from 'styled-components';
import ToggleTheme from '../widgets/ToggleTheme';

const Nav = ({ visible }) => {
  return (
    <Wrap visible={visible}>
      <NavIcon visible={visible} style={{ marginTop: visible ? '0' : '0' }}>
        <IoAlbumsOutline />
      </NavIcon>
      <NavIcon visible={visible} style={{ marginTop: visible ? '60px' : '0' }}>
        <IoTrashOutline />
      </NavIcon>
      <NavIcon
        visible={visible}
        style={{
          marginTop: visible ? '120px' : '0',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        }}
      >
        <ToggleTheme />
      </NavIcon>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: absolute;
  bottom: -50px;
`;
export const NavIcon = styled.div`
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: ${(props) => (props.visible ? props.theme.shadow : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  transition: all 300ms;
  background-color: ${(props) => props.theme.iconBg};
  color: ${(props) => props.theme.textColor};

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 25px;
  }
`;
export default Nav;
