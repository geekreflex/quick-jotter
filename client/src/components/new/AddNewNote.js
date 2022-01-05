import { IoAddSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AddNewNote = () => {
  const navigate = useNavigate();

  const handleAddNewNote = () => {
    navigate('/new');
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
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 99999;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textColor};

  @media only screen and (max-width: 418px) {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
`;

export default AddNewNote;
