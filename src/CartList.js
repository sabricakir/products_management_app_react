import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class CartList extends Component {
  renderCart = () => {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cart.map(item => (
              <tr key={item.product.id}>
                <td>{item.product.id}</td>
                <td>{item.product.categoryId}</td>
                <td>{item.product.productName}</td>
                <td>{item.product.unitPrice}</td>
                <td>{item.product.unitsInStock}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => this.props.removeFromCart(item.product)} className='btn btn-danger'>Remove</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    )
  }
  render() {
    return (
      <div>
        {this.renderCart()}
      </div>
    )
  }
}
