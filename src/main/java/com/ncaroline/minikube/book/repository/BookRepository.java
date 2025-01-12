package com.ncaroline.minikube.book.repository;

import com.ncaroline.minikube.book.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookRepository extends MongoRepository<Book, String> {
    // Custom query method to find books by author
    List<Book> findByAuthor(String author);
}
