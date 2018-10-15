import React from 'react';

export default function Overview({text, children}) {
    return (
        <h1>
            {text}
            {children}
        </h1>
    );
}