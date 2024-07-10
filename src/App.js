import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Function from './components/Function';
import Class from './components/Class';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>
      <div className="Class">
        <h1>This is a class</h1>
        <Class name={name} message={message} />
      </div>
      <div className="Function">
        <h1>This is a function</h1>
        <Function name={name} message={message} />
      </div>
    </>
  );
}

export default App;
