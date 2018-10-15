import React from 'react';

export default function Button(props) {
    const {onClick, cssClass, children} = props;
    return (
        <button type="button" className={cssClass} onClick={onClick}>{children}</button>
    );
}