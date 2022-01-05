import { useEffect, useRef } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setSelectedColor } from '../../features/actionsSlice';

const ColorPalette = ({ sltColor, setColor }) => {
  const { theme } = useSelector((state) => state.actions);
  const dispatch = useDispatch();
  const colorRef = useRef();

  const defaultColor = theme === 'light' ? '#fff' : '#202124';

  const colors = [
    { color: defaultColor, label: 'Default' },
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
                border: `2px solid ${color.color}`,
              }}
              color={color.color}
              className="active"
              ref={colorRef}
            >
              <IoCheckmarkSharp />
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
                border: `2px solid ${color.color}`,
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
  white-space: nowrap;
  overflow-x: auto;

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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props) => (props.color === '#fff' ? '#222' : '#fff')};

  &:hover {
    border-color: #bbb !important;
  }
`;

export default ColorPalette;
