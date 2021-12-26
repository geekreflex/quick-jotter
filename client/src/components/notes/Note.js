import { useState } from 'react';
import styled from 'styled-components';
import Toolbar from './Toolbar';

const Note = ({ note }) => {
  const [visible, setVisible] = useState(false);

  const truncate = (note) => {
    if (note.length > 100) {
      let short = note.slice(0, 300);
      return short.slice(0, short.lastIndexOf(' ')) + '...';
    }
    return note;
  };

  const handleNoteClick = () => {
    console.log('note clicked');
  };

  return (
    <Wrap
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={handleNoteClick}
      style={{
        color: note.color && note.color !== 'default' ? '#fff' : '',
        backgroundColor:
          note.color && note.color !== 'default' ? note.color : '#fff',
      }}
    >
      <NoteMain>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteContent>{truncate(note.content)}</NoteContent>
      </NoteMain>
      <Toolbar visible={visible} light={note.color === 'default'} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: inline-block;
  width: 50%;
  margin: 0 10px;
  vertical-align: top;
  background: #fff;
  border-radius: 5px;
  max-width: 250px;
  min-width: 250px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  cursor: default;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #eee;
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
  /* max-height: 300px; */
  word-wrap: break-word;
  font-size: 14px;
`;

export default Note;
