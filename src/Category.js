import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div className='text-start'>
        <h2> {this.props.info.title} </h2>
        <p> {this.props.info.desc} </p>
      </div>
    )
  }
}
