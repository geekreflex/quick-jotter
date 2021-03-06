import Masonry from 'react-masonry-component';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Note from './Note';

const NoteList = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <Wrap>
      <Inner>
        <Masonry className="grid-section" options={{ fitWidth: true }}>
          {notes.map((note) => (
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
  .grid-section {
    margin: 0 auto;
  }
`;

const Inner = styled.div`
  width: 100%;
`;

export default NoteList;
