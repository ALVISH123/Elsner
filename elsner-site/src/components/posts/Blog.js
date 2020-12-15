import React, { Component } from 'react';

import { Card } from 'antd';

class Blog extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      dataRoute: 'https://staging.elsner.com/wp-json/wp/v2/posts'
    }
  }

  render() {
    return (
      <div className="App">
      
        
        <div className="data">

        
        {this.state.data.map((data) => 
            <Card  key={`data-${data.id}}`}>

              <img src={ data.image } alt={ data.name } className="data-image"/>
              <p>{ data.name }</p>
              <p>{ data.date }</p>
                <div>{data.categories}
                {data.tags}
                {data.per_page}
                {data.search}
                {data.after}
                {data.author}
                {data.author_exclude}
                {data.before}</div>
              <button 
                data-item-name={ data.name }
                data-item-id={ data.id }
                data-item-image={ data.image }
                data-item-description={ data.description }
                data-item-date={ data.date }
                data-item-url= { `${this.state.dataRoute}/${data.id}`}
                data-item-categories= {data.categories}
                data-item-tags={data.tags}
                data-item-per_page={data.per_page}
                data-item-search={data.search}
                data-item-after={data.after}
                data-item-author={data.author}
                data-item-author_exclude={data.author_exclude}
                data-item-before={data.before} >
                details
              </button>
              
              
           </Card>
          )}
          
        </div>
       
      </div>
      
    );
  }

  componentDidMount(){
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(data => this.setState((prevState, props) => {
        return { data: data.map(this.mapdata)};
      }));
  }

  mapdata(data){
    return {
      id: data.id,
      
      image: data.image,
      name: data.title.rendered,
      description: data.description,
      categories: data.categories,
      tags:data.tags,
      per_page:data.pr_page,
      search: data.search,
      after:data.after,
      author:data.author,
      author_exclude:data.author_exclude,
      before:data.before,
      
    }
  }
}

export default Blog;