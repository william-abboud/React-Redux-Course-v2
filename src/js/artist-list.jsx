import React from 'react';
import ArtistCard from './artist-card';

class ArtistList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: "dark",
            artists: this.props.artists
        };

        this.sayHello = this.sayHello.bind(this);
    }

    sayHello() {
        console.log("Hello");
    }

    render() {
        const { artists } = this.state;

        return (
            <div>
                <ul className={this.state.theme}>
                    {
                        artists.map(artist =>
                            <ArtistCard 
                                key={artist.id}
                                artist={artist}
                                onClick={this.props.onClick}
                            />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ArtistList;