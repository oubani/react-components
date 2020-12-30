import React, { useState } from 'react';
import { Navbar } from './components';
import { Container, GlobalStyle } from './GlobalStyles';
import { theme } from './components/config/theme';
import { Headind, Title } from './components/shared/Headings';

export const App = () => {
  const [mode, setMode] = useState(theme.dark);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {/* <h1>{mode ? 'dark' : 'light'}</h1>
      <button onClick={() => setMode(!mode)}> Change mode </button> */}
      <Container>
        <Title center>Title</Title>
        <Headind>Second title</Headind>
      </Container>
    </>
  );
};

export default App;
