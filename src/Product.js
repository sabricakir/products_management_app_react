import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class Product extends Component {
  state = {
    products: []
  }

  getProducts = () => {
    let url = "http://localhost:3000/products";

    if (this.props.currentCategory) {
      url += "?categoryId=" + this.props.currentCategory;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className='text-start'>
        <h2> {this.props.info.title} / {this.props.currentCategory} </h2>
        <p> {this.props.info.desc} </p>
        <Table borderless>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit in Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
