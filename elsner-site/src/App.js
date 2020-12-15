import './App.css';

import React, { Component } from 'react';

import Blog from './components/posts/Blog';

// import Blogdetails from './components/posts/Blogdetails';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Blogdetails/> */}
        <Blog/>
      </div>
    )
  }
}
