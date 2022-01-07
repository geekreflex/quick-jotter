import React from 'react';
import { IoTrashOutline, IoAlbumsOutline } from 'react-icons/io5';
import styled from 'styled-components';

const Empty = ({ msg, type }) => {
  const ReturnType = () => {
    if (type === 'note') {
      return <IoAlbumsOutline />;
    } else if (type === 'trash') {
      return <IoTrashOutline />;
    }
  };

  return (
    <Wrap>
      <Main>
        <Icon>{ReturnType()}</Icon>
        <Msg>{msg}</Msg>
      </Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
`;
const Msg = styled.div``;
const Icon = styled.div`
  font-size: 50px;
`;
export default Empty;
