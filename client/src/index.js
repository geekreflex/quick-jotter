import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from '../src/theme/GlobalStyles';
import ThemeProvider from './theme/ThemeProvider';
import { getUserInfoFromStorage } from './features/userSlice';
import { setThemeMode } from './features/actionsSlice';

store.dispatch(getUserInfoFromStorage());
store.dispatch(setThemeMode());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
