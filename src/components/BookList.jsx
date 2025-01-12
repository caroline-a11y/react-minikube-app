import React, { useEffect, useState } from 'react';
import { fetchBooks } from './path/to/fetchBooks'; // Replace with the correct path

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        console.log('Fetched data:', data); // Debugging output
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    getBooks();
  }, []);

  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => {
          const imageUrl = `/images/${book.image}`;
          console.log('Image URL:', imageUrl);
          return (
            <div key={book.id}>
              <img
                src={imageUrl}
                alt={book.title}
                style={{ width: '150px', height: '200px' }}
                onError={(e) => (e.target.src = '/images/placeholder.png')}
              />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          );
        })
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default BookList;
