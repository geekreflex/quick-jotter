import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import Note from '../notes/Note';

const SearchResult = ({ search }) => {
  return (
    <Wrap className="animate__animated animate__fadeInUp">
      <Inner>
        <Masonry className="grid-section" options={{ fitWidth: true }}>
          {search.map((note) => (
            <Note note={note} key={note._id} />
          ))}
        </Masonry>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 100px;
  width: 100%;
  margin-bottom: 50px;
  display: inline-block;
  .grid-section {
    margin: 0 auto;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Inner = styled.div`
  width: 100%;
`;

export default SearchResult;
