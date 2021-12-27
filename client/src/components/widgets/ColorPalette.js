import { IoCheckmarkSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ColorPalette = ({ setColor, sltColor }) => {
  const { theme } = useSelector((state) => state.actions);

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
          color={color.color}
          className={sltColor === color.color ? 'active' : ''}
        >
          {sltColor === color.color && <IoCheckmarkSharp />}
        </Color>
      ))}
    </Palette>
  );
};

const Palette = styled.div`
  white-space: nowrap;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;

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
