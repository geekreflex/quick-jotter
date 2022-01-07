import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ViewNoteModal from '../components/notes/ViewNoteModal';

const ViewNote = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  const handleCloseViewNote = () => {
    setVisible(false);
    setTimeout(() => {
      navigate('/');
    }, 200);
  };

  return (
    <Wrap
      className={
        visible
          ? 'animate__animated animate__fadeIn'
          : 'animate__animated animate__fadeOut'
      }
    >
      <Overlay onClick={handleCloseViewNote} />
      <Inner>
        <Main>
          <ViewNoteModal close={handleCloseViewNote} />
        </Main>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Inner = styled.div`
  position: relative;
  z-index: 99;
  width: 600px;
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;

  @media only screen and (max-width: 520px) {
    padding: 0;
    height: 100vh;
  }
`;
const Main = styled.div`
  color: white;
  width: 100%;
`;

export default ViewNote;
