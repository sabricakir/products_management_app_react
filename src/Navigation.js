import React, { Component } from 'react'
import { Nav, Dropdown, DropdownToggle } from 'reactstrap';
import CartSummary from './CartSummary';

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
          <CartSummary cart={this.props.cart} />
        </Dropdown>
      </Nav>
    )
  }
}
