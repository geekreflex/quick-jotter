import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/header/Header';
import AddNewNote from '../components/new/AddNewNote';
import NewNoteModal from '../components/new/NewNoteModal';
import NoteList from '../components/notes/NoteList';
import { getNotes } from '../features/notesSlice';
import { Outlet } from 'react-router';
import NoteOption from '../components/option/NoteOption';

const DashBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <AddNewNote />
      <NoteList />
      <NoteOption />
      <div style={{ position: 'relative', zIndex: '999999' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
