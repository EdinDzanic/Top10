import React, { Component } from "react";
import Poster from './Poster';

class Movie extends Component {

    render() {
        const { poster_path, name, onClick, id } = this.props;
        return (
            <div className="col-6 mb-4">
                <div className="card h-100" onClick={() => onClick(id)}>
                    <Poster className="card-img-top" posterPath={poster_path} alt="Movie"/>
                    <div className="d-flex card-body justify-content-center align-items-center">
                        <p className="card-title text-center">{name}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;