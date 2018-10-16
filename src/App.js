import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import ListView from './components/ListView';
import DetailsView from './components/DetailsView';

class App extends Component {
  render() {
    const { isListView } = this.props;
    return (
      <div className="App">
        {isListView ? <ListView /> : <DetailsView />}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    isListView: state.isListView
  }
);

App.propTypes = {
  isListView: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(App);
