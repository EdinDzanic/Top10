import React from 'react';

export default function Video({video}) {
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