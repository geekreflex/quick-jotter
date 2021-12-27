import { useSelector } from 'react-redux';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import Options from './Options';
import { useState } from 'react';

const Avatar = () => {
  const { user } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);

  const handleAccountClick = () => {
    setVisible(!visible);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <Wrap>
      <OutsideClickHandler onOutsideClick={hide}>
        <Main onClick={handleAccountClick}>
          <img src={user.picture} alt="Profile Picture" />
        </Main>
        <Options visible={visible} />
      </OutsideClickHandler>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  @media only screen and (max-width: 418px) {
    width: 35px;
    height: 35px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Main = styled.div``;
export default Avatar;
