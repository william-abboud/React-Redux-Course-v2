import React from 'react';

export default function BookDetail({
    authors, cover, publishDate, pages, title, url 
}) {
    return (
        <div className="book-detail">
            <img src={cover.large} />
            <h2><a href={url}>{title}</a></h2>
            <h5>Authors:</h5>
            <ul>
                {authors.map(author => <li className="author" key={author}>{author}</li>)}
            </ul>

            <h5>Date:</h5>
            <span>{publishDate}</span>
        
            <h5>Pages:</h5>
            <span>{pages}</span>
        </div>
    );
}