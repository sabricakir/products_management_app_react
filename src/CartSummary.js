import React, { Component } from 'react'
import { DropdownItem, DropdownMenu, Badge, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class CartSummary extends Component {
  renderCart = () => {
    return (
      <DropdownMenu>
        <DropdownItem header>Cart</DropdownItem>
        {this.props.cart.map(item => (
          <DropdownItem key={item.product.id} className='d-flex justify-content-between'>
            <div className='d-flex'>
              <p>{item.product.productName} <span className='text-danger'>${item.product.unitPrice}</span> </p>
              <p className='ms-2'>
                <Badge color="success" pill>
                  x{item.quantity}
                </Badge>
              </p>
            </div>
            <div className='ms-2'>
              <Button color='danger' size='sm' onClick={() => this.props.removeFromCart(item.product)}>Remove</Button>
            </div>
          </DropdownItem>
        ))}
        <DropdownItem divider />
        <DropdownItem>
          <Link to='/cart' className='text-decoration-none'>Go to cart</Link>
        </DropdownItem>
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
