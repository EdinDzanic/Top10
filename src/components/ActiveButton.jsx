import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button'

export default function ActiveButton(props) {
    const { onClick, active = false, children } = props;
    const cssClass = active ? 'btn-primary' : 'btn-outline-primary';
    return (
        <Button cssClass={"btn " + cssClass} onClick={onClick}>{children}</Button>
    );
}

ActiveButton.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}