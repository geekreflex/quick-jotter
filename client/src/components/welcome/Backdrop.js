import styled from 'styled-components';
import { Note } from '../../utils/loadImg';

const Backdrop = () => {
  return (
    <Wrap>
      <Left></Left>
      <Right></Right>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Left = styled.div``;
const Right = styled.div`
  position: fixed;
  top: 0;
  right: -200px;
  width: 1000px;
  height: 100%;
  background-image: url(${Note});
  background-position: cover;
  background-size: cover;
  z-index: 999;
  transform: rotate(30deg);
  border-radius: 10px;
  filter: blur(1px);

  @media only screen and (max-width: 768px) {
    top: 300px;
    right: -500px;
  }
`;

export default Backdrop;
