import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  clearSelectedColor,
  toggleNoteOptions,
  closeNoteOptions,
  setSelectedColor,
} from '../../features/actionsSlice';
import { switchNoteColor, updateNoteColor } from '../../features/notesSlice';
import CloseBtn from '../buttons/CloseBtn';
import ColorPalette from '../widgets/ColorPalette';
import NoteMenu from './NoteMenu';

const NoteOption = () => {
  const { noteOptions, sltColor } = useSelector((state) => state.actions);
  const [color, setColor] = useState(sltColor);
  const { note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleColor = () => {
    const payload = {
      noteId: note._id,
      color,
    };

    dispatch(updateNoteColor(payload));
    dispatch(switchNoteColor(payload));
  };

  useEffect(() => {
    if (sltColor && note) {
      handleColor();
    }
  }, [sltColor, note, handleColor]);

  const handleCloseOptions = () => {
    dispatch(toggleNoteOptions());
    dispatch(clearSelectedColor());
  };

  useEffect(() => {
    dispatch(closeNoteOptions());
  }, [location]);

  useEffect(() => {
    dispatch(setSelectedColor(color));
  }, [color]);

  return (
    <Wrap
      visible={noteOptions}
      className={
        noteOptions
          ? 'animate__animated animate__fadeIn'
          : 'animate__animated animate__fadeOut'
      }
    >
      <Overlay onClick={handleCloseOptions} />
      <Inner>
        <Main
          className={
            noteOptions
              ? 'animate__animated animate__fadeInUp'
              : 'animate__animated animate__fadeOut'
          }
        >
          <CloseBtn handleClick={handleCloseOptions} />
          <NoteMenu />
          <NoteColor>
            <ColorPalette sltColor={note?.color} setColor={setColor} />
          </NoteColor>
        </Main>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9999999;
  padding: 0 20px;
  justify-content: center;
  align-items: flex-start;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Inner = styled.div`
  margin-top: 10px;
  color: ${(props) => props.theme.textColor};
  position: relative;
`;
const Main = styled.div`
  min-width: 200px;
  width: 300px;
  max-width: 100%;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 20px 0;
  padding-top: 50px;
  border-radius: 8px;
  position: relative;

  @media only screen and (max-width: 520px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    border-radius: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const NoteColor = styled.div`
  padding: 0 20px;
  overflow-x: auto;
`;

export default NoteOption;
