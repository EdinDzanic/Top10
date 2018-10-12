import React from "react";

export default function Movie() {
    return (
        <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Movie" />
            <div className="card-body">
              <h2 className="card-title text-center">Movie Title</h2>
            </div>
        </div>
    );
}