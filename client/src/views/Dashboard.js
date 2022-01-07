import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import AddNewNote from '../components/new/AddNewNote';
import NewNoteModal from '../components/new/NewNoteModal';
import NoteList from '../components/notes/NoteList';
import { getNotes } from '../features/notesSlice';
import { Outlet } from 'react-router';
import NoteOption from '../components/option/NoteOption';
import Empty from '../components/empty/Empty';

const DashBoard = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <AddNewNote />
      {notes.length ? (
        <NoteList />
      ) : (
        <Empty msg="You've don't have any note." type="note" />
      )}
      <NoteOption />
      <div style={{ position: 'relative', zIndex: '999999' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
