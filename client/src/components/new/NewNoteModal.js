import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleNoteModal } from '../../features/actionsSlice';
import { createNote } from '../../features/notesSlice';
import ColorPalette from '../widgets/ColorPalette';

const NewNoteModal = () => {
  const dispatch = useDispatch();
  const { newNoteModal } = useSelector((state) => state.actions);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('');

  const titleLabelRef = useRef();
  const titleEditableRef = useRef();
  const contentLabelRef = useRef();
  const contentEditableRef = useRef();

  const handleSubmitNote = (e) => {
    e.preventDefault();
    const payload = {
      title,
      content,
      color,
    };
    dispatch(createNote(payload));
    dispatch(toggleNoteModal());
  };

  const handleToggleAddModal = () => {
    dispatch(toggleNoteModal());
    setTitle('');
    setContent('');
    if (title || content) {
      titleEditableRef.current.innerText = '';
      contentEditableRef.current.innerText = '';
    }
  };

  const handleTitleInput = () => {
    if (title) {
      titleLabelRef.current.classList.add('hide');
    } else {
      titleLabelRef.current.classList.remove('hide');
    }
  };

  const handleContentInput = () => {
    if (content) {
      contentLabelRef.current.classList.add('hide');
    } else {
      contentLabelRef.current.classList.remove('hide');
    }
  };

  const handleEnterKey = (e) => {
    if (e.which === 13) {
      contentEditableRef.current.focus();
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (newNoteModal) {
      contentEditableRef.current.focus();
    }
  }, [newNoteModal]);

  return (
    <Wrap
      visible={newNoteModal}
      className={
        newNoteModal
          ? 'animate__animated animate__fadeIn'
          : 'animate__animated animate__fadeOut'
      }
    >
      <Overlay onClick={handleToggleAddModal} />
      <Inner
        className={
          newNoteModal
            ? 'animate__animated animate__zoomInUp'
            : 'animate__animated animate__zoomOutUp'
        }
      >
        <form onSubmit={handleSubmitNote}>
          <Editable>
            <EWrap className="title">
              <ELabel ref={titleLabelRef}>Title</ELabel>
              <ETitle
                contentEditable="true"
                role="textbox"
                aria-multiline="true"
                dir="ltr"
                tabIndex="0"
                onInput={(e) => setTitle(e.currentTarget.innerText)}
                onKeyUp={handleTitleInput}
                onKeyPress={handleEnterKey}
                suppressContentEditableWarning
              ></ETitle>
            </EWrap>
            <EWrap className="content">
              <ELabel ref={contentLabelRef}>Take a note...</ELabel>
              <EContent
                ref={contentEditableRef}
                contentEditable="true"
                role="textbox"
                aria-multiline="true"
                dir="ltr"
                tabIndex="0"
                onInput={(e) => setContent(e.currentTarget.innerText)}
                onKeyUp={handleContentInput}
                suppressContentEditableWarning
              ></EContent>
            </EWrap>
          </Editable>
          <NoteTool>
            <ColorPalette setColor={setColor} sltColor={color} />
          </NoteTool>
          <button type="submit">Submit Note</button>
        </form>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  transition: all 300ms;
  transition-delay: 300ms;
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

const NoteTool = styled.div`
  margin-bottom: 10px;
`;

const Editable = styled.div`
  margin-bottom: 20px;
  .hide {
    display: none;
  }

  .title {
    font-size: 18px;
  }

  .content {
    font-size: 14px;
  }
`;
const EWrap = styled.div`
  position: relative;
  width: 100%;
`;
const ETitle = styled.div`
  height: 40px;
  outline: none;
  position: relative;
`;

const EContent = styled.div`
  min-height: 40px;
  max-height: 400px;
  overflow: auto;
  border: none;
  outline: none;
  position: relative;
`;
const ELabel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #555;
`;

export default NewNoteModal;
