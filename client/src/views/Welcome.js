import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import WelcomeBoard from '../components/welcome/WelcomeBoard';

const Welcome = () => {
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuth) {
      window.location.href = '/dashboard';
    }
  }, []);

  return (
    <Wrap>
      <WelcomeBoard />
    </Wrap>
  );
};

const Wrap = styled.div`
  overflow: hidden;
`;

export default Welcome;
