import React from 'react';
import './App.css';



import {
  Route,
  Switch,
 BrowserRouter
} from 'react-router-dom';

import Blog from './components/Blog/Blog';
import FullBlog from './components/FullBlog/FullBlog';
import Header from './components/Header/Header';

function App(props) {
  return (
    <>
    <BrowserRouter>
    
    <Header />
      <Switch>
        <Route path="/blog" exact component={Blog} />
        <Route path={'/blog/:id'} exact component={FullBlog} />

        {/* <Route path="/" component={App} /> */}
      </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;