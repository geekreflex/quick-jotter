import { IoCloseSharp } from 'react-icons/io5';
import styled from 'styled-components';

const CloseBtn = ({ handleClick }) => {
  return (
    <Wrap onClick={() => handleClick()}>
      <IoCloseSharp />
    </Wrap>
  );
};

const Wrap = styled.div`
  color: #fff;
  font-size: 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 30px;
  transition: all 0.3s;
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 9999;

  @media only screen and (max-width: 768px) {
    top: 10px;
    right: 20px;
  }

  &:hover {
    color: #888;
    background-color: #eee;
  }
`;

export default CloseBtn;
