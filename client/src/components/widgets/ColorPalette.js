import { useEffect, useRef } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSelectedColor } from '../../features/actionsSlice';

const ColorPalette = ({ sltColor, setColor }) => {
  const dispatch = useDispatch();
  const colorRef = useRef();

  const colors = [
    { color: '#202124' },
    { color: '#5c2b29' },
    { color: '#614919' },
    { color: '#5b2245' },
    { color: '#1e3a57' },
    { color: '#442f19' },
    { color: '#1d504b' },
    { color: '#2d555e' },
    { color: '#256141' },
  ];

  const handleColorClick = (color) => {
    setColor(color);
    dispatch(setSelectedColor(color));
  };

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.scrollIntoView();
    }
  }, [sltColor]);

  const bdColor = (color) => {
    if (color === '#202124') {
      return '2px solid #999';
    } else {
      return `2px solid ${color}`;
    }
  };

  return (
    <Palette>
      {colors.map((color) => {
        if (sltColor === color.color) {
          return (
            <Color
              onClick={() => {
                handleColorClick(color.color);
              }}
              key={color.color}
              style={{
                backgroundColor: color.color,
                border: bdColor(color.color),
              }}
              color={color.color}
              className="active"
              ref={colorRef}
            >
              <Icon>
                <IoCheckmarkSharp />
              </Icon>
            </Color>
          );
        } else {
          return (
            <Color
              onClick={() => {
                handleColorClick(color.color);
              }}
              key={color.color}
              style={{
                backgroundColor: color.color,
                border: bdColor(color.color),
              }}
              color={color.color}
            ></Color>
          );
        }
      })}
    </Palette>
  );
};

const Palette = styled.div`
  overflow-x: auto;
  display: flex;
  width: 100%;

  .active {
    border-color: #bbb !important;
  }
`;
const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props) => (props.color === '#ffffff' ? '#222222' : '#ffffff')};

  &:hover {
    border-color: #bbb !important;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ColorPalette;
