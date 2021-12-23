import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleNoteModal } from '../../features/actionsSlice';
import { createNote } from '../../features/notesSlice';

const NewNoteModal = () => {
  const dispatch = useDispatch();
  const { newNoteModal } = useSelector((state) => state.actions);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmitNote = (e) => {
    e.preventDefault();
    const payload = {
      title,
      content,
    };
    dispatch(createNote(payload));
    dispatch(toggleNoteModal());
  };

  const handleToggleAddModal = () => {
    dispatch(toggleNoteModal());
  };

  return (
    <Wrap visible={newNoteModal}>
      <Overlay onClick={handleToggleAddModal} />
      <Inner>
        <Title>Create new note</Title>
        <form onSubmit={handleSubmitNote}>
          <InputWrap>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </InputWrap>
          <InputWrap>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Take a note..."
            />
          </InputWrap>
          <button type="submit">Submit Note</button>
        </form>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Inner = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  width: 600px;
  max-width: 100%;
  border-radius: 8px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;

  input,
  textarea {
    border: none;
    padding: 20px 0;
    outline: none;
    width: 100%;

    &::placeholder {
      color: #222;
    }
  }

  input {
    height: 40px;
    font-size: 20px;
  }

  textarea {
    height: 200px;
  }
`;

export default NewNoteModal;
