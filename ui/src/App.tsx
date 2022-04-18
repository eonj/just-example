import Axios from 'axios';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [info, setInfo] = React.useState<undefined | string>(undefined);
  React.useEffect(() => {
    (async () => {
      const getInfoResult = await Axios.get('/api/info', { headers: { 'Accept': 'text/plain', }, });
      setInfo(getInfoResult.data);
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          info: {info}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
