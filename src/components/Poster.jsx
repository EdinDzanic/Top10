import React from 'react';
import PropTypes from 'prop-types';

import posterPlaceholder from './../images/placeholder-image.jpg';

const POSTER_URL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"

function Poster({ posterPath, alt, className = "" }) {
    const src = posterPath ? POSTER_URL + posterPath : posterPlaceholder;
    return (
        <img className={className} src={src} alt={alt} />
    );
}

Poster.propTypes = {
    posterPath: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Poster;