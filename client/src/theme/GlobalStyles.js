import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.primary};
  line-height: 1.5;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

::-webkit-scrollbar {
  height: 12px;
  overflow: visible;
  width: 12px;
}

@media only screen and (max-width: 768px) {
  ::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}
}


::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  background-clip: padding-box;
  border: solid transparent;
  border-width: 1px 1px 1px 6px;
  min-height: 28px;
  padding: 100px 0 0;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07);
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07);
}

::-webkit-scrollbar-corner {
  background: transparent;
}

::-webkit-scrollbar-track {
  background-clip: padding-box;
  border: solid transparent;
  border-width: 0 0 0 4px;
}
`;
