// src/App.js
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <h2 className="text-xl">Main Content</h2>
      </main>
    </div>
  );
}

export default App;
