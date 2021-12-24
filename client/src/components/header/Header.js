import styled from 'styled-components';
import Avatar from '../account/Avatar';
import Menu from './Menu';

const Header = () => {
  return (
    <Wrap>
      <Inner>
        <Menu />
        <Avatar />
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 100px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`;

const Inner = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export default Header;
