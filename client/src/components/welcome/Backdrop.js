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
  width: 100%;
  height: 100%;
  display: flex;
`;
const Left = styled.div`
  width: 40%;
`;
const Right = styled.div`
  width: 60%;
  background-image: url(${Note});
  background-position: cover;
  background-size: cover;
  transform: rotate(30deg);
`;

export default Backdrop;
