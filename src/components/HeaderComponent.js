import React, { Component } from "react";
import { Row, Col } from "antd";
import Login from "./Login";
import { Button } from "antd";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/bcp1.png" height="80" width="111" alt="BCP" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> <br />
                    HOME
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span> NOUS <br />{" "}
                    CONNAÎTRE
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/projectsMenu">
                    <span className="fa fa-list fa-lg"></span> NOS <br />{" "}
                    PROJETS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span>
                    {"  "}ESPACE <br /> COMMUNICATION
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/depot">
                    <span className="fas fa-upload">
                      {" "}
                      DEPOSER
                      <br /> MA DAMANDE
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>

            <Nav className="ml-auto" navbar>
              <Row>
                <Col span={11}>
                  <NavItem>
                    <Button outline onClick={this.toggleModal}>
                      <span className="fa fa-sign-in fa-lg"></span> Login
                    </Button>
                  </NavItem>
                </Col>
                <Col span={11} offset={2}>
                  <NavItem>
                    <NavLink className="fa fa-sign-up fa-lg" to="/signUp">
                      <span></span> <Button outline>Sign up</Button>
                    </NavLink>
                  </NavItem>
                </Col>
              </Row>
            </Nav>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>La Banque Centrale Populaire</h1>
                <p>
                  La Banque Centrale Populaire vous accompagne pour le
                  développement
                  <br /> de vos idées innovantes.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Login />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
