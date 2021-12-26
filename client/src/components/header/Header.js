import styled from 'styled-components';
import Avatar from '../account/Avatar';
import SearchIcon from '../search/SearchIcon';
import Menu from './Menu';

const Header = () => {
  return (
    <Wrap>
      <Inner>
        <Left>
          <Menu />
          <SearchIcon />
        </Left>
        <Right>
          <Avatar />
        </Right>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.header`
  width: 100%;
  margin-bottom: 100px;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  right: 0;
`;

const Inner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div``;

export default Header;
