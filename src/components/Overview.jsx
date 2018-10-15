import React from 'react';

export default function Overview({text}) {
    return (
        <section>
            <h2>Overview:</h2>
            <p>{text}</p>
        </section>
    );
}