import React from 'react';
import GlobalStyle from './styles/global'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      <GlobalStyle/>
    </div>
  );
}

export default App;
