import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setSelectedNote } from '../../features/notesSlice';
import Toolbar from './Toolbar';

const Note = ({ note }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const truncate = (note) => {
    if (note.length > 100) {
      let short = note.slice(0, 300);
      return short.slice(0, short.lastIndexOf(' ')) + '...';
    }
    return note;
  };

  const handleNoteClick = () => {
    console.log('note clicked');
    navigate(`/note/${note._id}`);
    dispatch(setSelectedNote(note));
  };

  return (
    <Wrap
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={handleNoteClick}
      color={note.color}
    >
      <NoteMain>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteContent>{truncate(note.content)}</NoteContent>
      </NoteMain>
      <Toolbar visible={visible} color={note.color} note={note} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: inline-block;
  width: 50%;
  margin: 0 10px;
  vertical-align: top;
  border-radius: 8px;
  max-width: 250px;
  min-width: 250px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  cursor: default;
  border: 1px solid
    ${(props) =>
      props.color === '#fff' || props.color === '#202124'
        ? props.theme.borderColor
        : props.color};
  background: ${(props) => props.color};
  color: ${(props) => (props.color === '#fff' ? '#555' : '#fff')};

  &:hover {
    box-shadow: ${(props) => props.theme.shadow};
  }
`;

const NoteMain = styled.div`
  padding: 20px;
`;

const NoteTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 0.867rem;
  font-weight: 600;
`;

const NoteContent = styled.p`
  width: 100%;
  white-space: pre-wrap;
  overflow: hidden;
  max-height: 350px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  font-size: 14px;
`;

export default Note;
