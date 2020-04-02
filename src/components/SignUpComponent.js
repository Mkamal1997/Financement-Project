import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';


export default class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Sign Up</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Form onSubmit={this.handleLogin}>
          <FormGroup>
            <Label htmlFor="nom">Nom</Label>
            <Input
              type="text"
              id="nom"
              name="nom"
              innerRef={input => (this.nom = input)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="prénom">Prénom</Label>
            <Input
              type="text"
              id="prénom"
              name="prénom"
              innerRef={input => (this.prénom = input)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              name="email"
              innerRef={input => (this.email = input)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              innerRef={input => (this.password = input)}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="remember"
                innerRef={input => (this.remember = input)}
              />
              Remember me
            </Label>
          </FormGroup>
          <Button type="submit" value="submit" color="primary">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
