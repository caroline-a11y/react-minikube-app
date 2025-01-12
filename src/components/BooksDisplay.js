import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../api'; // Adjust the path if `fetchBooks` is located elsewhere
import './BooksDisplay.css'; // We'll create this CSS file

const BooksDisplay = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data.slice(0, 9)); // Limit to 9 books for a 3x3 grid
    };
    loadBooks();
  }, []);

  return (
    <div className="books-grid">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} className="book-image" />
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BooksDisplay;
