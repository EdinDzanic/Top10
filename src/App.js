import React, { Component } from 'react';

import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <div className="App p-2">
        <form action="">
          <div className="form-group">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary">Movies</button>
              <button type="button" className="btn btn-outline-primary">TV Shows</button>
            </div>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="search">Search</label>
            <input type="search" className="form-control" id="search" placeholder="Search" />
          </div>
        </form>

        <Movies />
      </div>
    );
  }
}

export default App;
