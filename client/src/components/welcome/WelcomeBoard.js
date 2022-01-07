import styled from 'styled-components';
import GoogleAuth from '../google/GoogleAuth';
import Backdrop from './Backdrop';
import QuickJotter from './QuickJotter';

const WelcomeBoard = () => {
  return (
    <Wrap>
      <Overlay />
      {/* <Backdrop /> */}
      <Inner>
        <QuickJotter />
        <Main>
          <GoogleAuth />
        </Main>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  background-color: #eee;
  z-index: 99;
  width: 500px;
  max-width: 100%;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  padding: 20px;
  border-radius: 8px;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export default WelcomeBoard;
