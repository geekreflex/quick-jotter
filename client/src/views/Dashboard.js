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

  const renderWhat = () => {
    if (status === 'loading') {
      return <Loading />;
    }

    if (notes && notes.length) {
      return <NoteList />;
    } else {
      <Empty msg="You've don't have any note." type="note" />;
      return;
    }
  };

  return (
    <div>
      <Header />
      <AddNewNote />
      {renderWhat()}
      <NoteOption />
      <div style={{ position: 'relative', zIndex: '999999' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
