import React from 'react';
import PropTypes from 'prop-types';

import Video from './Video';
import Poster from './Poster';

function Preview({ videos, posterPath }) {
    let hasTrailer = videos !== undefined && videos.results && videos.results.length > 0;
    let trailer;
    if (hasTrailer)
        trailer = videos.results.find(video => video.type === 'Trailer');

    hasTrailer = trailer !== undefined;
    return (
        <React.Fragment>
            {hasTrailer ?
                <Video video={trailer} /> :
                <Poster className="mb-2" posterPath={posterPath} alt="Movie" />
            }
        </React.Fragment>
    );
}

Preview.propTypes = {
    videos: PropTypes.object.isRequired,
    posterPath: PropTypes.string
}

export default Preview;