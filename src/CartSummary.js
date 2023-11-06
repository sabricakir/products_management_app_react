import React, { Component } from 'react'
import { DropdownItem, DropdownMenu, Badge } from 'reactstrap';


export default class CartSummary extends Component {
  renderCart = () => {
    return (
      <DropdownMenu>
        <DropdownItem header>Cart</DropdownItem>
        {this.props.cart.map(item => (
          <DropdownItem key={item.product.id} className='d-flex'>
            <p>{item.product.productName} <span className='text-danger'>${item.product.unitPrice}</span> </p>
            <p className='ms-2'>
              <Badge color="success" pill>
                x{item.quantity}
              </Badge>
            </p>
          </DropdownItem>
        ))}
      </DropdownMenu>
    )
  }

  renderEmptyCart = () => {
    return (
      <DropdownMenu>
        <DropdownItem>No Items</DropdownItem>
      </DropdownMenu>
    )
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderCart() : this.renderEmptyCart()}
      </div>
    )
  }
}
