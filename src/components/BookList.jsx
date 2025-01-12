import React, { useEffect, useState } from 'react';
import { fetchBooks } from './api'; // Make sure the fetchBooks function is properly imported

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="book-container">
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;


