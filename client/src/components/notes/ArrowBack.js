import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import styled from 'styled-components';

const ArrowBack = ({ close, color }) => {
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
  color: ${(props) =>
    props.color === '#fff' ? props.theme.textColor : '#fff'};

  @media only screen and (min-width: 520px) {
    display: none;
  }
`;

const Icon = styled.div`
  font-size: 20px;
`;

export default ArrowBack;
