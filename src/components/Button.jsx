import React from 'react';

export default function Button(props) {
    const {onClick, active, children} = props;
    const cssClass = active ? 'btn-primary' : 'btn-outline-primary';
    return (
        <button type="button" className={`btn ${cssClass}`} onClick={onClick}>{children}</button>
    );
}