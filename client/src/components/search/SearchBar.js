import { useRef } from 'react';
import { IoCloseSharp, IoSearchSharp } from 'react-icons/io5';
import styled from 'styled-components';

const SearchBar = ({ handleSearch, text, clearInput, visible }) => {
  const searchInputRef = useRef();

  const handleSearchFocus = () => {
    searchInputRef.current.focus();
  };

  const handleInputChange = (e) => {
    handleSearch(e);
  };

  return (
    <Wrap
      className={
        visible
          ? 'animate__animated animate__zoomIn'
          : 'animate__animated animate__zoomOut'
      }
    >
      <Inner>
        <form>
          <Search>
            <i onClick={handleSearchFocus}>
              <IoSearchSharp />
            </i>
            <input
              placeholder="Search"
              value={text}
              onChange={(e) => handleInputChange(e)}
              ref={searchInputRef}
            />

            <i
              style={{ visibility: text ? 'visible' : 'hidden' }}
              onClick={() => clearInput()}
            >
              <IoCloseSharp />
            </i>
          </Search>
        </form>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
  margin-top: 100px;

  @media only screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

const Search = styled.div`
  background-color: #fff;
  padding: 0 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  max-width: 100%;
  width: 600px;

  input {
    height: 60px;
    margin: 0 5px;
    padding: 0 10px;
    border: none;
    outline: none;
    font-size: 16px;
    flex: 1;
  }

  i {
    font-size: 20px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #777;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
`;

const Inner = styled.div`
  width: 100%;

  form {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default SearchBar;
