import styled from 'styled-components';
import WelcomeBoard from '../components/welcome/WelcomeBoard';

const Welcome = () => {
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
