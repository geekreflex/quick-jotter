import styled from 'styled-components';
import { IoEllipsisVertical } from 'react-icons/io5';

const Toolbar = () => {
  return (
    <Wrap>
      <div>
        <i>
          <IoEllipsisVertical />
        </i>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Toolbar;
