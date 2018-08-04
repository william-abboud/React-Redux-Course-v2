import React from 'react';
import BookDetail from '../book-detail';

export default function BooksDetailsView(props) {
    return (
        <div className="books-view">
            <h1>This is the Books Details View</h1>
            <BookDetail {...props.location.details} />
        </div>
    );
}