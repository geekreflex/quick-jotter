import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/userSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default Logout;
