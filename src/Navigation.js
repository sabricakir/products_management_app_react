import React, { Component } from 'react'
import { Nav, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Badge } from 'reactstrap';

export default class Navigation extends Component {
  state = {
    dropdownOpen: false
  }
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }
  render() {
    return (
      <Nav className='d-flex justify-content-end py-4 pe-5'>
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
          <DropdownToggle caret nav className='text-white bg-primary rounded-3 px-5 py-2'>
            Cart
          </DropdownToggle>
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
        </Dropdown>
      </Nav>
    )
  }
}
