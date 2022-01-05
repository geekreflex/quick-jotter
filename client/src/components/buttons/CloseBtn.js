import { IoCloseSharp } from 'react-icons/io5';
import styled from 'styled-components';

const CloseBtn = ({ handleClick }) => {
  return (
    <Wrap>
      <i onClick={handleClick}>
        <IoCloseSharp />
      </i>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;

  i {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
  }
`;

export default CloseBtn;
