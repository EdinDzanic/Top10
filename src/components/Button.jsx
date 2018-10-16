import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const { onClick, cssClass = "", children } = props;
    return (
        <button type="button" className={cssClass} onClick={onClick}>{children}</button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    cssClass: PropTypes.string
}

export default Button;