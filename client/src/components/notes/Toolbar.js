import styled from 'styled-components';
import { IoEllipsisVertical } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setSelectedNote } from '../../features/notesSlice';
import { toggleNoteOptions } from '../../features/actionsSlice';

export const MoreIcon = ({ color, note }) => {
  const dispatch = useDispatch();

  const handleMoreClick = (e) => {
    e.stopPropagation();
    dispatch(setSelectedNote(note));
    dispatch(toggleNoteOptions());
  };

  return (
    <IconWrap color={color} onClick={handleMoreClick}>
      <i>
        <IoEllipsisVertical />
      </i>
    </IconWrap>
  );
};

const Toolbar = ({ visible, color, note }) => {
  return (
    <Wrap style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <MoreIcon color={color} note={note} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px;
`;

export const IconWrap = styled.div`
  cursor: pointer;
  i {
    width: 30px;
    height: 30px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.color === '#fff' ? '#555' : '#fff')};

    &:hover {
      background-color: ${(props) =>
        props.color === '#fff' ? 'rgba(0,0,0,.2)' : 'rgba(255,255,255, .2)'};
    }
  }
`;

export default Toolbar;
