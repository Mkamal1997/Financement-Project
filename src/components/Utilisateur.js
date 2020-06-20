import React, { Component } from "react";

import { Card, Form, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faPlusSquare,
  faUndo,
  faList,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Logout from "./Logout";
import Keycloak from "keycloak-js";
import MyToast from "./MyToast";

export default class Utilisateur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
    };
    //this.state = { keycloak: null, authenticated: false };
  }

  initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  addUser = () => {
    fetch("http://localhost:8080/auth/admin/realms/finance-app/users", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        credentials: [
          {
            type: "password",
            value: this.state.username,
          },
        ],
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.data != null) {
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleChange = (event) => {
    console.log("name= " + event.target.name);
    console.log("value= " + event.target.value);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={"Utilisateur enregistré Avec succès."}
            type={"success"}
          />
        </div>
        <Card className={"border "}>
          <Card.Header className="title">
            <FontAwesomeIcon icon={faPlusSquare} /> Ajouter un Utilisateur
          </Card.Header>
          <Form id="domaineFormId">
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUserName">
                  <Form.Label>username</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    placeholder="Entrer le nom d'utilisateur"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridfirstName">
                  <Form.Label>firstName</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                    placeholder="Entrer le prénom d'utilisateur"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridlastName">
                  <Form.Label>lastName</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                    placeholder="Entrer l'identifiant d'utilisateur"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Entrer l'email' d'utilisateur"
                  />
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button
                size="sm"
                variant="success"
                type="submit"
                id="bot2"
                onClick={() => this.addUser()}
              >
                register
              </Button>{" "}
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}
