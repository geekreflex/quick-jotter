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

  return (
    <Wrap
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{
        backgroundColor:
          note.color && note.color !== 'default' ? note.color : '#fff',
      }}
    >
      <NoteMain>
        <NoteTitle>
          <h3>{note.title}</h3>
        </NoteTitle>
        <NoteContent>
          <p>{truncate(note.content)}</p>
        </NoteContent>
      </NoteMain>
      <Toolbar visible={visible} />
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

  p {
    width: 100%;
    white-space: pre-wrap;
    overflow: hidden;
    max-height: 300px;
    word-wrap: break-word;
  }
`;

const NoteMain = styled.div`
  padding: 20px;
`;

const NoteTitle = styled.div`
  margin-bottom: 10px;
`;

const NoteContent = styled.div``;

export default Note;
