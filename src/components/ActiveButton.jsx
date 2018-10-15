import React from 'react';
import Button from './Button'

export default function ActiveButton(props) {
    const {onClick, active, children} = props;
    const cssClass = active ? 'btn-primary' : 'btn-outline-primary';
    return (
        <Button cssClass={"btn " + cssClass} onClick={onClick}>{children}</Button>
    );
}