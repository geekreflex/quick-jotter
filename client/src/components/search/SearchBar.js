import { useState } from 'react';
import { IoCloseSharp, IoSearchSharp } from 'react-icons/io5';
import styled from 'styled-components';

const SearchBar = () => {
  const [text, setText] = useState('');

  const handleClearSearchInput = () => {
    setText('');
  };

  return (
    <Wrap>
      <Container>
        <Inner>
          <form>
            <Search>
              <i>
                <IoSearchSharp />
              </i>
              <input
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <i
                style={{ visibility: text ? 'visible' : 'hidden' }}
                onClick={handleClearSearchInput}
              >
                <IoCloseSharp />
              </i>
            </Search>
          </form>
        </Inner>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-bottom: 70px;
`;

const Search = styled.div`
  background-color: #fff;
  padding: 0 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  input {
    width: 500px;
    height: 60px;
    margin: 0 5px;
    padding: 0 10px;
    border: none;
    outline: none;
    font-size: 16px;
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

    &:hover {
      background-color: #eee;
    }
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchBar;
