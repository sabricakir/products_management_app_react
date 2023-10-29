import React from 'react';
import Navigation from './Navigation';
import Category from './Category';
import Product from './Product';
import { Alert } from 'reactstrap';

function App() {
  return (
    <div>
      <Alert color="danger">
        This is a primary alert — check it out!
      </Alert>

      <h1>Hello World From Base Component</h1>
      <Navigation />
      <Category />
      <Product />
    </div>
  );
}

export default App;
