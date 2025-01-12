package com.ncaroline.minikube.book;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
public class Book {
    private String id;
    private String title;
    private String author;

    // Constructors
    public Book() {}

    public Book(String id, String title, String author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
