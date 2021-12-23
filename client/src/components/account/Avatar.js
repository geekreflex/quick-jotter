import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Avatar = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Wrap>
      <img src={user.picture} alt="Profile Picture" />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export default Avatar;
