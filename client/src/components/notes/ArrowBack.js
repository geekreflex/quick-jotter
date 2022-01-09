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
  display: none;
  padding: 10px 20px;
  color: ${(props) => props.theme.color};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 520px) {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
  }
`;

const Icon = styled.div`
  font-size: 20px;
`;

export default ArrowBack;
