import React from 'react';
import posterPlaceholder from './../images/placeholder-image.jpg';

const POSTER_URL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"

export default function Poster({posterPath, alt, className=""}) {
    const src = posterPath ? POSTER_URL + posterPath : posterPlaceholder;
    return (
        <img className={className} src={src} alt={alt}/>
    );
}