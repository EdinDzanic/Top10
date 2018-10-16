import React, { Component } from 'react';
import _ from 'lodash';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: props.value
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.debounceTextChange = _.debounce(props.handleChange, 500);
    }

    render() {
        const {searchQuery} = this.state;
        return (
            <div className="form-group">
                <label className="sr-only" htmlFor="search">Search</label>
                <input onChange={this.handleTextChange} value={searchQuery} type="search" className="form-control" id="search" placeholder="Search" />
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({searchQuery: e.target.value});
        this.debounceTextChange.cancel();
        this.debounceTextChange(e.target.value);
    }
}

export default Search;