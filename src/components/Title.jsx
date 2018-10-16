import React from 'react';
import PropTypes from 'prop-types';

function Title({ text, children }) {
    return (
        <h1>
            {text}
            {children}
        </h1>
    );
}

Title.propType = {
    text: PropTypes.string
}

export default Title;