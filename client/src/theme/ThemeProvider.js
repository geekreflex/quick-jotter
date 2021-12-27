import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './ThemeConfig';

export default ({ children }) => {
  const { theme } = useSelector((state) => state.actions);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}></div>;
  }

  return body;
};
