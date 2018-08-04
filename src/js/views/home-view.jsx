import React from 'react';

export default class HomeView extends React.Component {
    render() {
        return (
            <div>
                <h1>This is page {this.props.location.search.split('=')[1]}</h1>
            </div>
        );
    }
}