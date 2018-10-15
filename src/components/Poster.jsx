import React from 'react';
import posterPlaceholder from './../images/placeholder.jpg';

const POSTER_URL = "https://image.tmdb.org/t/p/w400"

export default function Poster({posterPath, alt, className=""}) {
    const src = posterPath ? POSTER_URL + posterPath : posterPlaceholder;
    return (
        <img className={className} src={src} alt={alt}/>
    );
}