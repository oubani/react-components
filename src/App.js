import React from 'react';
import { Navbar } from './components';
import { Container, GlobalStyle } from './GlobalStyles';
// import { theme } from './components/config/theme';
import { Headind, Title } from './components/shared/Headings';
import { Wrapper } from './components/shared/Rows/Wrapper';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Card from './components/shared/Card/Card';

export const App = () => {
  // const [mode, setMode] = useState(theme.dark);
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Container>
          <Title center>Title</Title>
          <Headind>Second title</Headind>
          <Wrapper column='3'>
            <div style={{ backgroundColor: 'red' }}>h</div>
            <div style={{ backgroundColor: 'blue' }}>2</div>
            <div style={{ backgroundColor: 'green' }}>3</div>
            <div style={{ backgroundColor: 'gray' }}>4</div>
            <div style={{ backgroundColor: 'red' }}>h</div>
            <div style={{ backgroundColor: 'blue' }}>2</div>
            <div style={{ backgroundColor: 'green' }}>3</div>
            <div style={{ backgroundColor: 'gray' }}>4</div>
            <div style={{ backgroundColor: 'red' }}>h</div>
            <div style={{ backgroundColor: 'blue' }}>2</div>
            <div style={{ backgroundColor: 'green' }}>3</div>
            <div style={{ backgroundColor: 'gray' }}>4</div>
          </Wrapper>
          <Card />
        </Container>
      </Router>
    </>
  );
};

export default App;
