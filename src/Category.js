import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: "Beverages" },
        { id: 2, name: "Condiments" },
        { id: 3, name: "Confections" }
      ]
    }
  }

  render() {
    return (
      <div className='text-start'>
        <h2> {this.props.info.title} </h2>
        <p> {this.props.info.desc} </p>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              key={category.id}
              onClick={() => this.props.updateCategory(category.name)}>
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
        <p className='text-success'> Selected Category: {this.props.currentCategory} </p>
      </div>
    )
  }
}
