import React from 'react';
import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}

export default App;
