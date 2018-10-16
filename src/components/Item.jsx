import React, { Component } from "react";

import Poster from './Poster';

class Item extends Component {

    render() {
        const { poster_path, name, onClick, id } = this.props;
        return (
            <div className="d-flex justify-content-center mb-4 col-md-6">
                <div className="col-10 poster rounded h-100 text-center" onClick={() => onClick(id)}>
                    <Poster className="mb-2" posterPath={poster_path} alt="Movie" />
                    <p className="card-title">{name}</p>
                </div>
            </div>
        );
    }
}

export default Item;