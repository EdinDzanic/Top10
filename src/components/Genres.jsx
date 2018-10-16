import React from 'react';

export default function Genres({ genres = [] }) {
    const allGenres = genres.map(genre => genre.name).join(", ");
    return (
        <React.Fragment>
            Genres: {allGenres}
        </React.Fragment>
    );
}