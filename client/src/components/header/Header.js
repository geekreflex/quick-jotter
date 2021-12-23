import styled from 'styled-components';
import Avatar from '../account/Avatar';
import Menu from './Menu';

const Header = () => {
  return (
    <Wrap>
      <Container>
        <Inner>
          <Menu />
          <Avatar />
        </Inner>
      </Container>
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

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Inner = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
