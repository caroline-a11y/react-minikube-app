package com.ncaroline.minikube.book.service;

import com.ncaroline.minikube.book.model.Book;
import com.ncaroline.minikube.book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Save a book
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    // Get all books
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // Get a book by ID
    public Optional<Book> getBookById(String id) {
        return bookRepository.findById(id);
    }

    // Delete a book by ID
    public void deleteBook(String id) {
        bookRepository.deleteById(id);
    }
}
