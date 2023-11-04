import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Category extends Component {
  state = {
    categories: []
  }

  getCategory = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  }

  componentDidMount() {
    this.getCategory();
  }

  render() {
    return (
      <div className='text-start'>
        <h2> {this.props.info.title} </h2>
        <p> {this.props.info.desc} </p>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              className={category.id === this.props.currentCategoryId ? 'list-group-item-primary' : ''}
              style={{ cursor: 'pointer' }}
              key={category.id}
              onClick={() => this.props.updateCategory(category)}>
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
        {this.props.currentCategoryId === 0 ? <p className='text-danger'> Please select a category! </p> : <p className='text-success'> Selected Category: {this.props.currentCategoryName} </p>}
      </div>
    )
  }
}
