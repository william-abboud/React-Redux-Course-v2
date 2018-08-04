import React from 'react';
import BooksList from '../books-list';

export default function BooksView() {
    return (
        <div className="books-view">
            <h1>This is the Books View</h1>
            <BooksList />
        </div>
    );
}