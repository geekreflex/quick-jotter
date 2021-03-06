import React from 'react';
import styled from 'styled-components';
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(`${timestamp}`);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <Wrap>
      <span>Edited:</span>
      <i>{timeAgo}</i>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 400;
  span {
    margin-right: 10px;
    font-weight: 900;
  }

  @media only screen and (max-width: 520px) {
    font-size: 11px;
  }
`;

export default TimeAgo;
