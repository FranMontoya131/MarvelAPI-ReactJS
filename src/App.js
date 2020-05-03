import React from 'react';
import './App.css';
import Home from './layout/Home';
import styled from 'styled-components';

const App = () => {
  return (
    <ContainerFather className="App">
      <Home />
    </ContainerFather>
  );
}

const ContainerFather = styled.div`
  width: 100%;
  height: 100vh;
  
`;

export default App;
