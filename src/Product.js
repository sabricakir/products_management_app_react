import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div className='text-end'>
        <h2> {this.props.info.title} </h2>
        <p> {this.props.info.desc} </p>
      </div>
    )
  }
}
