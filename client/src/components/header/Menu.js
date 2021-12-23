import { IoMenuSharp } from 'react-icons/io5';
import styled from 'styled-components';

const Menu = () => {
  return (
    <Wrap>
      <IoMenuSharp />
    </Wrap>
  );
};

const Wrap = styled.div`
  color: #222;
  background-color: #fff;
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Menu;
