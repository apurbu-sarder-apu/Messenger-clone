import React, {useEffect, useState} from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'Hi', 'Whats up']);
  const [username, setUsername] = useState('');

  useEffect (() => {
    setUsername(prompt('Please enter your name'));
  }, [])


  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Programmers!!!</h1>
      <h2>Welcome {username}</h2>
    <form>

    <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
    </FormControl>

    </form>


      {/* Messages themselves */}

      {
        messages.map(message => (
          <Message text={message}/>
        ))
      }
    </div>
  );
}

export default App;