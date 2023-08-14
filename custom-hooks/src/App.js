import React from 'react';
import './App.css';
import useStorage from './useStorage';

function App() {
  const [content, setContent] = useStorage('content', '')
  return (
    <div className="App">
      <h3>Custom Hooks</h3>
      <div>
        <input type="text" value={content} onChange={e => setContent(e.target.value)}></input>
      </div>
    </div>
  );
}

export default App;
