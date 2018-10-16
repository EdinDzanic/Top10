import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import List from './List';
import {
    fetchItems,
    searchItems,
    changeSearchQuery,
    displayItem
} from './../actions';
import Search from './Search';
import LoadingSpinner from './LoadingSpinner';
import ToggleButtons from './ToggleButtons';

class ListView extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value) {
        const { dispatch } = this.props;
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
            dispatch(fetchItems(selectedMode));
    }

    componentDidUpdate(prevProps) {
        const { dispatch, selectedMode, searchQuery } = this.props;

        if (searchQuery !== prevProps.searchQuery) {
            if (searchQuery.length > 2)
                dispatch(searchItems(selectedMode, searchQuery));
            else if (prevProps.searchQuery.length > 2)
                dispatch(fetchItems(selectedMode));
        }
        else if (selectedMode !== prevProps.selectedMode) {
            if (searchQuery.length > 2)
                dispatch(searchItems(selectedMode, searchQuery));
            else
                dispatch(fetchItems(selectedMode));
        }
    }

    render() {
        const { items, isLoading, searchQuery } = this.props;
        return (
            <div>
                <section>
                    <ToggleButtons />
                    <Search handleChange={this.handleChange} value={searchQuery} />
                </section>
                {isLoading ?
                    <div className="d-flex justify-content-center"><LoadingSpinner /></div> :
                    <List items={items} onClick={this.handleClick} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        items: state.items,
        selectedMode: state.selectedMode,
        searchQuery: state.searchQuery,
        isLoading: state.isLoading
    }
);

ListView.propTypes = {
    items: PropTypes.array.isRequired,
    selectedMode: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(ListView);