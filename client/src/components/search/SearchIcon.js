import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SearchIcon = () => {
  const navigate = useNavigate();

  const handleSearchField = () => {
    navigate('/search');
  };

  return (
    <Wrap onClick={handleSearchField}>
      <IoSearch />
    </Wrap>
  );
};

const Wrap = styled.div`
  font-size: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textColor};

  @media only screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
`;

export default SearchIcon;
