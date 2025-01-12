// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchBooks } from './api'; // Importing fetchBooks from the API index
import BooksDisplay from './components/BooksDisplay';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks(); // Fetch the books data
      setBooks(data);  // Set the fetched data to the state
    };
    getBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <BooksDisplay />
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            <img
              src={`/images/${book.imageUrl}`}
              alt={book.title}
              style={{ width: "150px", height: "200px" }}
            />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default App;


