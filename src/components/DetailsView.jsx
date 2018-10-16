import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CHANGE_VIEW, getItem } from '../actions';
import MovieDetails from './MovieDetails';
import TvDetails from './TvDetails';
import Button from './Button';
import LoadingSpinner from './LoadingSpinner';

class DetailsView extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { dispatch, selectedMode, selectedId } = this.props;
        dispatch(getItem(selectedMode, selectedId));
    }

    handleClick() {
        const { dispatch } = this.props;
        dispatch(CHANGE_VIEW);
    }

    render() {
        const { selectedItem, selectedMode, isLoading } = this.props;

        let details;
        if (selectedMode === 'movie')
            details = <MovieDetails {...selectedItem} />
        else
            details = <TvDetails {...selectedItem} />

        return (
            <div>
                <Button cssClass="btn btn-primary mb-2" onClick={this.handleClick}>⇐ Back</Button>
                <div className="d-flex flex-column">
                    {isLoading ? <LoadingSpinner /> : details}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        selectedMode: state.selectedMode,
        selectedId: state.selectedId,
        selectedItem: state.selectedItem,
        isLoading: state.isLoading
    }
);

DetailsView.propTypes = {
    selectedMode: PropTypes.string.isRequired,
    selectedId: PropTypes.number.isRequired,
    selectedItem: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(DetailsView);