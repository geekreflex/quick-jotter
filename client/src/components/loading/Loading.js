import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrap>
      <LoadMain>
        <div className="loader-5 center">
          <span></span>
        </div>
      </LoadMain>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadMain = styled.li`
  .loader-5 {
    height: 32px;
    width: 32px;
    -webkit-animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-1 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes loader-5-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loader-5::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: auto;
    margin: auto;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    -webkit-animation: loader-5-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-2 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(24px, 0, 0) scale(0.5);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-5-2 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(24px, 0, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
  .loader-5::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: auto;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    -webkit-animation: loader-5-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-3 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(-24px, 0, 0) scale(0.5);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-5-3 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(-24px, 0, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
  .loader-5 span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
  }
  .loader-5 span::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    right: 0;
    margin: auto;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    -webkit-animation: loader-5-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-4 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(0, 24px, 0) scale(0.5);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-5-4 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, 24px, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
  .loader-5 span::after {
    content: '';
    display: block;
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    -webkit-animation: loader-5-5 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-5-5 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-5-5 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(0, -24px, 0) scale(0.5);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }
  @keyframes loader-5-5 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, -24px, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
`;

export default Loading;
