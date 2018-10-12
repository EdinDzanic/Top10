import React from "react";

import Movie from './Movie';

export default function Movies() {
    return (
        <div className="d-flex p-2 justify-content-between flex-wrap">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
    );
};