import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getUrl, { SERVICE_ENDPOINT } from './service-urls';
import './App.css';

function App() {

  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get(getUrl(SERVICE_ENDPOINT.TEST))
      .then(({ data }) => setMessage(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;
