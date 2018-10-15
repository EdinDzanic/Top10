import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import Movies from './Movies';
import ToggleModeButton from './ToggleModeButton';
import {
    MODES,
    discoverItems,
    searchItems,
    changeSearchQuery,
    displayItem
}
    from './../actions';
import Search from './Search';
import LoadingSpinner from './LoadingSpinner';

class ListView extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value) {
        const { dispatch } = this.props;
        //const value = value;
        dispatch(changeSearchQuery(value));
    }

    handleClick(id) {
        const { dispatch } = this.props;
        dispatch(displayItem(id));
    }

    componentDidMount() {
        const { dispatch, selectedMode, searchQuery } = this.props;
        if (searchQuery.length > 2)
            dispatch(searchItems(selectedMode, searchQuery));
        else
            dispatch(discoverItems(selectedMode));
    }

    componentDidUpdate(prevProps) {
        const { dispatch, selectedMode, searchQuery } = this.props;

        if (searchQuery !== prevProps.searchQuery) {
            if (searchQuery.length > 2)
                dispatch(searchItems(selectedMode, searchQuery));
            else if (prevProps.searchQuery.length > 2)
                dispatch(discoverItems(selectedMode));
        }
        else if (selectedMode !== prevProps.selectedMode) {
            if (searchQuery.length > 2)
                dispatch(searchItems(selectedMode, searchQuery));
            else
                dispatch(discoverItems(selectedMode));
        }
    }

    render() {
        const { items, isLoading, searchQuery } = this.props;
        return (
            <div>
                <section>
                    <div className="form-group">
                        <div className="btn-group" role="group">
                            <ToggleModeButton mode={MODES.MOVIE}>Movies</ToggleModeButton>
                            <ToggleModeButton mode={MODES.TV}>TV Shows</ToggleModeButton>
                        </div>
                    </div>
                    <Search handleChange={this.handleChange} value={searchQuery} />
                </section>
                {isLoading ?
                    <div className="d-flex justify-content-center"><LoadingSpinner /></div> :
                    <Movies items={items} onClick={this.handleClick} />}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        items: state.items,
        selectedMode: state.selectedMode,
        searchQuery: state.searchQuery,
        isLoading: state.isLoading
    }
);

export default connect(mapStateToProps)(ListView);