// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchBooks } from './api'; // Importing fetchBooks from the API index
import BooksDisplay from './components/BooksDisplay'; // Import BooksDisplay component
import './App.css'; // Import the App styles

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
    <div className="App-header">
      <h1 className="header">Book List</h1> {/* Apply header styles */}
      {/* Pass books state as a prop to BooksDisplay */}
      <BooksDisplay books={books} />
      {books.length > 0 ? (
        <></>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}

export default App;


