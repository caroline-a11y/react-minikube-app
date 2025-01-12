import React, { useEffect, useState } from 'react';
import { fetchBooks } from './api'; // Adjust the path to where the fetchBooks function is located

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
    // Set the background color of the entire page to black with red text
    <div className="bg-black text-red-500 min-h-screen p-8">
      <h1 className="text-align: center text-3xl mb-10">Book List</h1>
      {/* Grid container for books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div key={book.id} className="bg-white text-black p-6 rounded-lg shadow-md">
            <img 
              src={book.image} 
              alt={book.title} 
              className="book-image mb-4 rounded-md w-full h-48 object-cover" 
            />
            <h3 className="book-title text-xl font-semibold">{book.title}</h3>
            <p className="book-author text-lg">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;

