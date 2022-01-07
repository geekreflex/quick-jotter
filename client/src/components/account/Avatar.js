import { useSelector } from 'react-redux';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import Options from './Options';
import { useState } from 'react';
import { IoCaretDown } from 'react-icons/io5';

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
        <Inner onClick={handleAccountClick}>
          <Main>
            <img src={user.picture} alt="Profile Picture" />
          </Main>
          <Icon>
            <IoCaretDown />
          </Icon>
        </Inner>
        <Options visible={visible} />
      </OutsideClickHandler>
    </Wrap>
  );
};

const Wrap = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.hover};
  box-shadow: ${(props) => props.theme.shadow};
  width: 42px;
  height: 42px;
  border-radius: 50%;

  @media only screen and (max-width: 418px) {
    width: 37px;
    height: 37px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const Icon = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
`;
export default Avatar;
