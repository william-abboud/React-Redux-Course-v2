import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BooksView from '../views/books-view';
import BookDetailsView from '../views/book-details-view';

export default function BooksLayout({ match }) {
    console.log(match);
    return (
        <div>
            <aside>
                <h2>Books Sidebar</h2>
            </aside>
            <Switch>
                <Route path={`${match.path}/:id`} component={BookDetailsView} />
                <Route path={match.path} component={BooksView} />
            </Switch>
        </div>
    );
}