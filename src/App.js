import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { actionAddCount } from './CountStore';

const mapStateToProps = (state) => ({
  countReducer: state.countReducer
});

const mapActionsToProps = {
  actionAddCount
};

const returnContent = currentProps => {
	    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {currentProps.countReducer.loading ? <p>Loading....</p> :
         <div>{currentProps.countReducer.ajaxResponse}</div>}
        <button onClick={currentProps.actionAddCount}>clickme</button>
        
      </div>
    )
}

class App extends Component {
  render() {
     return returnContent(this.props);
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
