import React, { Component } from 'react'
import Navigation from './Navigation';
import Category from './Category';
import Product from './Product';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
  categoryInfo = { title: "Category Component", desc: "Category Description" };
  productInfo = { title: "Product Component", desc: "Product Description" };

  state = { currentCategory: "" }

  updateCategory = (categoryName) => {
    this.setState({ currentCategory: categoryName });
  }

  render() {

    return (
      <div>
        <Container>
          <Row>
            <Navigation />
          </Row>
          <Row>
            <Col xs="3">
              <Category updateCategory={this.updateCategory} currentCategory={this.state.currentCategory} info={this.categoryInfo} />
            </Col>
            <Col xs="9">
              <Product currentCategory={this.state.currentCategory} info={this.productInfo} />
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}
