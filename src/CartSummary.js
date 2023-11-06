import React, { Component } from 'react'
import { DropdownItem, DropdownMenu, Badge } from 'reactstrap';


export default class CartSummary extends Component {
  render() {
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
}
