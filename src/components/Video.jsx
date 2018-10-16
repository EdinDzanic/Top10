import React from 'react';
import PropTypes from 'prop-types';

function Video({ video }) {
    const url = "https://www.youtube.com/embed/" + video.key;
    return (
        <iframe
            className="mb-2"
            width="560"
            height="315"
            src={url}
            frameBorder="0"
            allowFullScreen
            title={video.name}>
        </iframe>
    );
}

Video.propTypes = {
    video: PropTypes.object.isRequired
}

export default Video;