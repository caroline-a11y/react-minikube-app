// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchBooks } from './api';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-4">Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="my-2">
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

