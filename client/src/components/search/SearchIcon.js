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
  color: #222;
  background-color: #fff;
  font-size: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 30px;

  @media only screen and (max-width: 418px) {
    width: 35px;
    height: 35px;
    font-size: 20px;
    margin-left: 15px;
  }
`;

export default SearchIcon;
