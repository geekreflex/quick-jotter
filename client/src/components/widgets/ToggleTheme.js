import { useDispatch, useSelector } from 'react-redux';

import useLocalStorage from '../../hooks/useLocalStorage';
import { setThemeMode } from '../../features/actionsSlice';
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5';

const ToggleTheme = () => {
  const [theme1, setTheme1] = useLocalStorage('theme', 'light');
  const { theme } = useSelector((state) => state.actions);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    if (theme === 'light') {
      setTheme1('dark');
    } else {
      setTheme1('light');
    }
    dispatch(setThemeMode());
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={handleToggleTheme}
    >
      {theme === 'light' ? <IoMoonSharp /> : <IoSunnySharp />}
    </div>
  );
};

export default ToggleTheme;
