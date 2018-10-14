import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {handleChange, value} = this.props;

        return (
            <div className="form-group">
                <label className="sr-only" htmlFor="search">Search</label>
                <input onChange={handleChange} value={value} type="search" className="form-control" id="search" placeholder="Search" />
            </div>
        );
    }
}

export default Search;