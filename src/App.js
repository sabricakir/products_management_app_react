import React, { Component } from 'react'
import Navigation from './Navigation';
import Category from './Category';
import Product from './Product';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
  state = { currentCategory: "" }

  updateCategory = (categoryName) => {
    this.setState({ currentCategory: categoryName });
  }

  render() {
    let categoryInfo = { title: "Category Component", desc: "Category Description" };
    let productInfo = { title: "Product Component", desc: "Product Description" };
    return (
      <div>
        <Container>
          <Row>
            <Navigation />
          </Row>
          <Row>
            <Col xs="3">
              <Category updateCategory={this.updateCategory} currentCategory={this.state.currentCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Product info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}
