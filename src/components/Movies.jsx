import React from "react";

import Movie from './Movie';

export default function Movies(props) {
    const { items, onClick } = props;
    return (
        <div className="d-flex flex-row p-2 justify-content-center flex-wrap">
            {items.length > 0 ?
                items.map((item, i) =>
                    <Movie
                        key={i}
                        name={item.name || item.title}
                        poster_path={item.poster_path}
                        onClick={onClick}
                        id={item.id}
                    />)
                : <p className="notice text-muted">No results found.</p>
            }
        </div>
    );
};