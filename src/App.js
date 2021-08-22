import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'Hi', 'Whats up']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Programmers!!!</h1>
    <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <Button variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
    </form>


      {/* Messages themselves */}

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;