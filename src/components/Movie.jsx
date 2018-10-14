import React, { Component } from "react";
import posterPlaceholder from './../images/placeholder.jpg';

const POSTER_URL = "https://image.tmdb.org/t/p/w400"

class Movie extends Component {

    render() {
        const { poster_path, name, onClick, id } = this.props;
        const src = poster_path ? POSTER_URL + poster_path : posterPlaceholder;
        return (
            <div className="col-6">
                <div className="card m-5" onClick={() => onClick(id)}>
                    <img className="card-img-top" src={src} alt="Movie" />
                    <div className="card-body">
                        <h2 className="card-title text-center">{name}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;