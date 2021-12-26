import { useDispatch } from 'react-redux';
import { IoAddSharp } from 'react-icons/io5';
import { toggleNoteModal } from '../../features/actionsSlice';
import styled from 'styled-components';

const AddNewNote = () => {
  const dispatch = useDispatch();

  const handleAddNewNote = () => {
    dispatch(toggleNoteModal());
  };

  return (
    <Wrap onClick={handleAddNewNote}>
      <IoAddSharp />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #222;
  cursor: pointer;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  z-index: 99999;

  @media only screen and (max-width: 418px) {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
`;

export default AddNewNote;
