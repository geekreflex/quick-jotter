import styled from 'styled-components';
import CloseBtn from '../components/search/CloseBtn';
import SearchBar from '../components/search/SearchBar';
import SearchResult from '../components/search/SearchResult';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
  const navigate = useNavigate();

  const { notes } = useSelector((state) => state.notes);
  const [search, setSearch] = useState([]);
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(true);

  const handleCloseSearch = () => {
    setVisible(false);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  const handleClearSearchInput = () => {
    setText('');
  };

  const handleSearch = (e) => {
    setText(e.target.value);
    console.log(search);
    const searchResults = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        note.content.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearch(searchResults);
  };

  useEffect(() => {
    if (text === '') {
      setSearch([]);
    }
  }, [text]);

  return (
    <Wrap
      className={
        visible
          ? 'animate__animated animate__fadeIn'
          : 'animate__animated animate__fadeOut'
      }
    >
      <CloseBtn handleClick={handleCloseSearch} />
      <Inner>
        <Main>
          <SearchBar
            handleSearch={handleSearch}
            text={text}
            setText={setText}
            clearInput={handleClearSearchInput}
            visible={visible}
          />
          <SearchResult search={search} />
        </Main>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  justify-content: center;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Inner = styled.div`
  padding: 10px;
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 900px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Search;
