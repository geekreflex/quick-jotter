import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createNote } from '../../features/notesSlice';
import ColorPalette from '../widgets/ColorPalette';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '../notes/ArrowBack';

const NewNoteModal = () => {
  const dispatch = useDispatch();
  const { newNoteModal, theme } = useSelector((state) => state.actions);
  const defaultColor = '#202124';

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState(defaultColor);
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setColor(defaultColor);
  }, [theme]);

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
    navigate('/');
  };

  const handleToggleAddModal = () => {
    setVisible(false);
    setTimeout(() => {
      navigate('/');
    }, 300);

    setTitle('');
    setContent('');
    setColor('');
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
      visible={visible}
      className={
        visible
          ? 'animate__animated animate__fadeIn'
          : 'animate__animated animate__fadeOut'
      }
    >
      <Overlay onClick={handleToggleAddModal} />
      <Inner
        color={color}
        className={
          visible
            ? 'animate__animated animate__zoomInDown'
            : 'animate__animated animate__zoomOut'
        }
      >
        <ArrowBack close={handleToggleAddModal} />
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
            <ColorPalette sltColor={color} setColor={setColor} />
            <NoteBtn color={color}>
              <button type="button" onClick={handleToggleAddModal}>
                Cancel
              </button>
              <button type="submit">Submit Note</button>
            </NoteBtn>
          </NoteTool>
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
  z-index: 999;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  transition: all 300ms;
  transition-delay: 300ms;

  @media only screen and (max-width: 520px) {
    padding: 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Inner = styled.div`
  position: relative;
  background-color: ${(props) => props.color};
  padding: 20px 0;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  width: 600px;
  max-width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all 300ms;
  color: ${(props) =>
    props.color === '#fff' ? props.theme.textColor : '#fff'};

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media only screen and (max-width: 520px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    padding: 0;
    padding-top: 10px;
  }
`;

const NoteTool = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 20px 20px;
  padding-bottom: 0;

  @media only screen and (max-width: 520px) {
    height: 100px;
    box-shadow: 0 -3px 16px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    padding: 20px 20px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

const Editable = styled.div`
  margin-bottom: 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px);

  @media only screen and (max-width: 520px) {
    margin-bottom: 0;
  }

  .hide {
    display: none;
  }

  .title {
    font-size: 18px;
  }

  .content {
    font-size: 14px;
    flex: 1;
    overflow-y: auto;
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
  border: none;
  outline: none;
  position: relative;

  @media only sreen and (min-width: 520px) {
    max-height: 400px;
  }
`;
const ELabel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const NoteBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 30px;
    border: none;
    outline: none;
    background: transparent;
    color: ${(props) =>
      props.color === '#fff' ? props.theme.textColor : '#fff'};
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 300ms;

    &:hover {
      background-color: ${(props) => props.theme.hover};
      color: ${(props) => props.theme.textColor};
    }
  }
`;
export default NewNoteModal;
