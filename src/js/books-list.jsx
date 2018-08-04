import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function BookCard({ authors, cover, title, id, details }) {
    return (
        <div className="book-card">
            <img src={cover.medium} />
            <h2><Link to={{
                pathname: `/books/${id}`,
                details
            }}>{title}</Link></h2>
            <h5>Authors:</h5>
            <ul>
                {authors.map(author => <li className="author" key={author}>{author}</li>)}
            </ul>
        </div>
    );
}

export default class BooksList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            isLoading: true
        };
    }

    render() {
        return (
            <div className="books-list">
                { this.state.isLoading 
                    ? <span>Loading....</span> 
                    : (
                        <ul>
                            {
                                this.state.books.map(book => (
                                    <BookCard
                                        key={book.identifiers.isbn_10 || book.identifiers.isbn_13}
                                        id={book.identifiers.isbn_10 || book.identifiers.isbn_13}
                                        authors={book.authors.map(author => author.name)}
                                        cover={book.cover}
                                        title={book.title}
                                        details={Object.assign({}, book, {
                                            authors: book.authors.map(author => author.name)
                                        })}
                                    />
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        );
    }

    componentDidMount() {
        const getBooks = () => {
            return new Promise((resolve, reject) => {
                fetch('https://openlibrary.org/api/books?bibkeys=9780980200447,1481424467,9781442497085,1476767181&jscmd=data&format=json')
                    .then(res => res.json())
                    .then(data => resolve(Object.values(data)))
                    .catch(error => reject(error));
            });
        };

        return getBooks()
            .then(books => {
                this.setState({ books, isLoading: false });
            });
    }
}