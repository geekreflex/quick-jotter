import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleNoteOptions } from '../../features/actionsSlice';
import { switchNoteColor, updateNoteColor } from '../../features/notesSlice';
import CloseBtn from '../buttons/CloseBtn';
import ColorPalette from '../widgets/ColorPalette';
import NoteMenu from './NoteMenu';

const NoteOption = () => {
  const { noteOptions, sltColor } = useSelector((state) => state.actions);
  const [color, setColor] = useState(sltColor);
  const { note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleColor = () => {
    const payload = {
      noteId: note._id,
      color,
    };

    dispatch(updateNoteColor(payload));
    dispatch(switchNoteColor(payload));
  };

  useEffect(() => {
    if (sltColor) {
      handleColor();
    }
  }, [sltColor]);

  const handleCloseOptions = () => {
    dispatch(toggleNoteOptions());
  };

  return (
    <Wrap visible={noteOptions}>
      <Overlay onClick={handleCloseOptions} />
      <Inner>
        <Main>
          <CloseBtn handleClick={handleCloseOptions} />
          <NoteMenu />
          <NoteColor>
            <ColorPalette sltColor={note.color} setColor={setColor} />
          </NoteColor>
        </Main>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9999999;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Inner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: ${(props) => props.theme.textColor};
  position: relative;
  padding: 0 20px;
`;
const Main = styled.div`
  min-width: 200px;
  width: 300px;
  max-width: 100%;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 20px 0;
  border-radius: 8px;
  position: relative;
`;

const NoteColor = styled.div`
  padding: 0 20px;
  overflow-x: auto;
`;

export default NoteOption;
