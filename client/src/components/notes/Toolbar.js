import styled from 'styled-components';
import { IoEllipsisVertical } from 'react-icons/io5';

const Toolbar = ({ visible, light }) => {
  const handleMoreClick = (e) => {
    e.stopPropagation();
    console.log('more...');
  };

  return (
    <Wrap style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <MoreIcon light={light} onClick={handleMoreClick}>
        <i>
          <IoEllipsisVertical />
        </i>
      </MoreIcon>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px;
`;

const MoreIcon = styled.div`
  cursor: pointer;
  i {
    width: 30px;
    height: 30px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${(props) =>
        props.light ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
    }
  }
`;

export default Toolbar;
