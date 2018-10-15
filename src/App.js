import React, { Component } from 'react';
import { connect } from 'react-redux'

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

const mapStateToProps = (state, ownProps) => (
  {
    isListView: state.isListView,
    selectedId: state.selectedId
  }
);

export default connect(mapStateToProps)(App);
