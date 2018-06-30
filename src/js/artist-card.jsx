import React from 'react';

export default function ArtistCard({ artist, onClick }) {
    return (
        <div className="artist-card">
            <h2 className="artist-card-name">{artist.name}</h2>
            <h4>{artist.birthName}</h4>
            <div>{artist.yearBorn}</div>
            <ul>
                {
                    artist.aliases.map(alias => {
                        return (
                            <li
                                key={alias}
                                onClick={(event) => onClick(alias, event)}
                            >
                                {alias}
                            </li>
                        );
                    })
                }
            </ul>
            <ul>
            {
                artist.popularSongs.map(song => {
                    return (
                        <li key={song}>{song}</li>
                    );
                })
            }
        </ul>
        </div>
    );
}