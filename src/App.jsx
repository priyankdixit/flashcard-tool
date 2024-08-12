import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Container style={{textAlign:'center'}}>
        <Header as="h1" >Flashcard Learning Tool</Header>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
