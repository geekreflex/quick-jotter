import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import AddNewNote from '../components/new/AddNewNote';
import NoteList from '../components/notes/NoteList';
import { getNotes } from '../features/notesSlice';
import { Outlet } from 'react-router';
import NoteOption from '../components/option/NoteOption';
import Empty from '../components/empty/Empty';
import Loading from '../components/loading/Loading';

const DashBoard = () => {
  const dispatch = useDispatch();
  const { notes, status } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loading />;
  }

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
