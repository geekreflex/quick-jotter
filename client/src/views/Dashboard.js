import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/header/Header';
import AddNewNote from '../components/new/AddNewNote';
import NewNoteModal from '../components/new/NewNoteModal';
import NoteList from '../components/notes/NoteList';
import SearchBar from '../components/search/SearchBar';
import { getNotes } from '../features/notesSlice';

const DashBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          marginTop: '100px',
        }}
      >
        <SearchBar />
        <AddNewNote />
      </div>
      <NewNoteModal />
      <NoteList />
    </div>
  );
};

export default DashBoard;
