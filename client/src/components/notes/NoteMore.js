import React from 'react';
import styled from 'styled-components';
import { MoreIcon } from './Toolbar';

const NoteMore = ({ color, close, note }) => {
  return (
    <Wrap color={color}>
      <MoreIcon color={color} note={note} />
      <CloseNote color={color}>
        <button onClick={close}>Close</button>
      </CloseNote>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 10px 20px;

  @media only screen and (max-width: 520px) {
    height: 80px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

const CloseNote = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    color: ${(props) =>
      props.color === '#fff' ? props.theme.textColor : '#fff'};

    &:hover {
      background-color: ${(props) =>
        props.color === '#fff' ? props.theme.hover : 'rgba(0,0,0, .2)'};
    }
  }
`;

export default NoteMore;
