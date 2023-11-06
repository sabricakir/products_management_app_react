import React, { Component } from 'react'
import alertify from 'alertifyjs';
import { Form, FormGroup, Input, Label } from 'reactstrap';

export default class UserForm extends Component {
  state = { email: '', password: '', city: '', description: '' }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    let user = { email: this.state.email, password: this.state.password, city: this.state.city, description: this.state.description };
    console.log(user);
    alertify.success(user.email + ' added to database!', 2);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' name='email' id='email' placeholder='Type email' onChange={this.onChangeHandler} />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input type='password' name='password' id='password' placeholder='Type password' onChange={this.onChangeHandler} />
          </FormGroup>
          <FormGroup>
            <Label for='city'>City</Label>
            <Input type='select' name='city' id='city' onChange={this.onChangeHandler}>
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>İzmir</option>
              <option>Adana</option>
              <option>Bursa</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='description'>Description</Label>
            <Input type='textarea' name='description' id='description' placeholder='Type description' onChange={this.onChangeHandler} />
          </FormGroup>
          <FormGroup>
            <input type='submit' value='Save' className='btn btn-success' />
          </FormGroup>
        </Form>
      </div>
    )
  }
}
