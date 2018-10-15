import React from 'react';
import spinner from './../images/spinner.svg';

export default function LoadingSpinner() {
    return(
        <img className="spinner" src={spinner} alt="Loading" />
    );
}