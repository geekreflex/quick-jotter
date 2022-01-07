import React from 'react';
import styled from 'styled-components';

const QuickJotter = () => {
  return (
    <Wrap>
      <Title>Quick Jotter</Title>
      <Tag>Easy peasy 🍋 squeezy</Tag>
    </Wrap>
  );
};

const Wrap = styled.div`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 30px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const Tag = styled.p`
  text-align: center;
`;

export default QuickJotter;
