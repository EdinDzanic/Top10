import React from 'react';
import PropTypes from 'prop-types';

function Overview({ text = "" }) {
    return (
        <section>
            <h2>Overview:</h2>
            <p>{text}</p>
        </section>
    );
}

Overview.propTypes = {
    text: PropTypes.string,
}

export default Overview;