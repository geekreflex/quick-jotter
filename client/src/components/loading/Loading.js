import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrap>
      <h1>Loading...</h1>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
`;

export default Loading;
