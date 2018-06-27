import React from 'react';

export default function ArtistCard({ artist }) {
    return (
        <div className="artist-card">
            <h2 className="artist-card-name">{artist.name}</h2>
            <h4>{artist.birthName}</h4>
            <div>{artist.yearBorn}</div>
            <ul>
                {
                    artist.aliases.map(alias => {
                        return (
                            <li>{alias}</li>
                        );
                    })
                }
            </ul>
            <ul>
            {
                artist.popularSongs.map(song => {
                    return (
                        <li>{song}</li>
                    );
                })
            }
        </ul>
        </div>
    );
}