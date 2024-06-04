import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, noteText]);
      setNoteText('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notizen-App in React</h1>
      </header>
      <div className="note-input">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Neue Notiz"
        />
        <button onClick={addNote}>Hinzufügen</button>
      </div>
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
