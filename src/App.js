import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

        <div className="d-flex p-2 justify-content-between flex-wrap" id="movies">
          <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Movie" />
            <div className="card-body">
              <h2 className="card-title text-center">Movie Title</h2>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Movie" />
            <div className="card-body">
              <h2 className="card-title text-center">Movie Title</h2>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Movie" />
            <div className="card-body">
              <h2 className="card-title text-center">Movie Title</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
