import React, { Component } from 'react';
import './style.scss';

export default class MainLayout extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        {this.props.children}
      </div>
    );
  }
}
