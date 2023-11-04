import React, { Component } from 'react'
import Navigation from './Navigation';
import Category from './Category';
import Product from './Product';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
  categoryInfo = { title: "Category Component", desc: "Category Description" };
  productInfo = { title: "Product Component", desc: "Product Description" };

  state = { currentCategoryName: "", currentCategoryId: 0, products: [], cart: [] };

  updateCategory = (category) => {
    this.setState({ currentCategoryName: category.name, currentCategoryId: category.id });
    this.getProducts();
  }

  getProducts = () => {
    let url = "http://localhost:3000/products";

    if (this.state.currentCategoryId !== 0) {
      url += "?categoryId=" + this.state.currentCategoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(item => item.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navigation cart={this.state.cart} />
          </Row>
          <Row>
            <Col xs="3">
              <Category updateCategory={this.updateCategory}
                currentCategoryName={this.state.currentCategoryName}
                currentCategoryId={this.state.currentCategoryId}
                info={this.categoryInfo} />
            </Col>
            <Col xs="9">
              <Product currentCategoryName={this.state.currentCategoryName}
                currentCategoryId={this.state.currentCategoryId}
                products={this.state.products}
                info={this.productInfo}
                addToCart={this.addToCart} />
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}
