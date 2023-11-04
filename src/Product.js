import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class Product extends Component {
  render() {
    return (
      <div className='text-start'>
        {this.props.currentCategoryId === 0 ?
          <h2> {this.props.info.title} </h2> :
          <h2> {this.props.info.title} <span className='text-success'>({this.props.currentCategoryName})</span> </h2>
        }
        <p> {this.props.info.desc} </p>
        <Table borderless>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={() => this.props.addToCart(product)}>Add to cart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
