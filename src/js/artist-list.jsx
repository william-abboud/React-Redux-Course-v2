import React from 'react';
import ArtistCard from './artist-card';

class ArtistList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            artists: props.artists,
            theme: new Date().getHours() < 22 ? "light" : "dark"
        };
    }

    loadMoreArtists() {
        fetch('/artists', { page: 2 }).then(newArtists => {
            this.setState({ artists: [...this.state.artists, ...newArtists] })
        });
    }

    render() {
        const { artists } = this.state;

        return (
            <ul className={this.state.theme}>
                {
                    artists.map(artist =>
                        <ArtistCard artist={artist} />)
                }
                <button onClick={this.loadMoreArtists}>Load more</button>
            </ul>
        );
    }
}

export default ArtistList;