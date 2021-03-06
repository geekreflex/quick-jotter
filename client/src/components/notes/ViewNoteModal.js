import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  setSelectedNote,
  updateNote,
  updateNoteAsync,
} from '../../features/notesSlice';
import ArrowBack from './ArrowBack';
import NoteMore from './NoteMore';
import TimeAgo from './TimeAgo';

const ViewNoteModal = ({ close }) => {
  const { note, notes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const { noteId } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setEditTitle(note.title);
      setContent(note.content);
      setEditContent(note.content);
    }
  }, [note]);

  useEffect(() => {
    const existingNote = notes.find((note) => note._id === noteId);

    if (existingNote) {
      console.log(existingNote);
      dispatch(setSelectedNote(existingNote));
    }
  }, [dispatch, noteId, notes]);

  const saveNoteChanges = () => {
    if (note) {
      const payload = {
        data: { title, content, color: note.color },
        noteId: note?._id,
      };

      dispatch(updateNote(payload));
      dispatch(updateNoteAsync(payload));
    }
  };

  return (
    <Wrap
      className="animate__animated animate__fadeInUp"
      style={{
        backgroundColor: note?.color,
      }}
      color={note?.color}
    >
      <ArrowBack color={note.color} close={close} />

      <NoteInfo color={note.color}>
        <NoteEditable>
          <NoteTitle
            contentEditable="true"
            role="textbox"
            aria-multiline="true"
            dir="ltr"
            tabIndex="0"
            suppressContentEditableWarning="true"
            onBlur={saveNoteChanges}
            onInput={(e) => setTitle(e.currentTarget.innerText)}
          >
            {editTitle}
          </NoteTitle>
          <NoteContent
            contentEditable="true"
            role="textbox"
            aria-multiline="true"
            dir="ltr"
            tabIndex="0"
            suppressContentEditableWarning="true"
            onBlur={saveNoteChanges}
            onInput={(e) => setContent(e.currentTarget.innerText)}
          >
            {editContent}
          </NoteContent>
        </NoteEditable>
        <TimeAgo timestamp={note.updatedAt} />
      </NoteInfo>
      <NoteMore color={note.color} close={close} note={note} />
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 8px;
  min-height: 200px;
  max-height: calc(100vh - 100px);
  border: 1px solid
    ${(props) =>
      props.color === '#fff' || props.color === '#202124'
        ? props.theme.borderColor
        : props.color};
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 520px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    border-color: ${(props) => props.color};
  }
`;
const NoteInfo = styled.div`
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.textColor};

  @media only screen and (max-width: 520px) {
    margin-top: 60px;
    height: calc(100vh - 140px);
  }
`;

const NoteEditable = styled.div`
  flex: 1;
`;
const NoteTitle = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  outline: none;
  margin-bottom: 20px;
  font-size: 25px;

  @media only screen and (max-width: 520px) {
    font-size: 20px;
  }
`;
const NoteContent = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  outline: none;
  margin-bottom: 20px;
  line-height: 1.5rem;
  letter-spacing: 0.00625em;
  font-weight: 400;
`;

export default ViewNoteModal;
