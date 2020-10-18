import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getUrl, { SERVICE_ENDPOINT } from './service-urls';
import './App.css';

function App() {

  const [downloadLink, setDownloadLink] = useState('');
  useEffect(() => {
    axios.post(getUrl(SERVICE_ENDPOINT.EPUB), {}, { responseType: 'blob' })
      .then(({ data }) => {
        setDownloadLink(URL.createObjectURL(data));
      }).catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        { downloadLink && <a href={downloadLink}>Download</a>}
      </header>
    </div>
  );
}

export default App;
