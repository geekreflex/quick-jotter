import { IoCheckmarkSharp } from 'react-icons/io5';
import styled from 'styled-components';

const ColorPalette = ({ setColor, sltColor }) => {
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

  const handleColorSelect = (color) => {
    setColor(color);
  };

  return (
    <Palette>
      {colors.map((color) => (
        <Color
          onClick={() => handleColorSelect(color.color)}
          key={color.color}
          style={{
            backgroundColor: color.color,
            border: `2px solid ${color.color}`,
          }}
        >
          {sltColor === color.color && <IoCheckmarkSharp />}
        </Color>
      ))}
    </Palette>
  );
};

const Palette = styled.div`
  display: flex;
  flex-wrap: wrap;

  .active {
  }
`;
const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;

  &:hover {
    border-color: #bbb !important;
  }
`;

export default ColorPalette;
