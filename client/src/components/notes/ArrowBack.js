import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import styled from 'styled-components';

const ArrowBack = ({ close, color }) => {
  console.log(color);
  return (
    <Wrap color={color}>
      <Icon onClick={close}>
        <IoArrowBackOutline />
      </Icon>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  padding: 10px 20px;
  color: ${(props) => props.theme.color};

  @media only screen and (min-width: 520px) {
    display: none;
  }

  @media only screen and (max-width: 520px) {
    position: fixed;
    top: 0;
    height: 60px;
  }
`;

const Icon = styled.div`
  font-size: 20px;
`;

export default ArrowBack;
