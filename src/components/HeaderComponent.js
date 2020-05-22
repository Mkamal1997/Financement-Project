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
      <div >
        <Navbar light expand="md" className="navbar fixed-top">
          
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto navbar-brand" href="/" id="log">
              <img src="assets/logo.png" height="60" width="170" alt="BCP" />
            </NavbarBrand>
        
            <Collapse isOpen={this.state.isNavOpen} navbar>
           
              <Nav navbar>
                <NavItem id="navPos">
                  <NavLink className="nav-link" to="/home" >
                  &nbsp; &nbsp; HOME
                  </NavLink>
                </NavItem>
                <NavItem id="navPos">
                  <NavLink className="nav-link" to="/about">
                  &nbsp; &nbsp; NOUS CONNAÎTRE
                  </NavLink>
                </NavItem>
                <NavItem id="navPos">
                  <NavLink className="nav-link" to="/projectsMenu">
                  &nbsp; &nbsp; NOS PROJETS
                  </NavLink>
                </NavItem>
                <NavItem id="navPos">
                  <NavLink className="nav-link" to="/contactus">
                  &nbsp; &nbsp;  ESPACE COMMUNICATION
                  </NavLink>
                </NavItem>
                <NavItem id="navPos">
                  <NavLink className="nav-link" to="/depot">
                  &nbsp; &nbsp;  DEPOSER MA DAMANDE
                    
                  </NavLink>
                </NavItem>
                <NavItem id="navPos">
                  <NavLink className="nav-link" to="/espaceChargéPrésélection">
                  &nbsp; &nbsp;  ESPACE PERSONNEL
                    
                  </NavLink>
                </NavItem>
              </Nav>
            

            <Nav className="ml-auto " navbar>
              
              <Row>
                <Col span={11}>
                  <NavItem className="js-scroll-trigger">
                    <Button outline onClick={this.toggleModal} className="buttom" type="primary" shape="round" size="large" id="bot1">
                      <span ></span>&nbsp; &nbsp;Login&nbsp; &nbsp;
                    </Button>
                  </NavItem>
                </Col>
                
                <Col span={11} offset={2}>
                  <NavItem className="js-scroll-trigger">
                    <NavLink className="fa fa-sign-up fa-lg  " to="/signUp">
                      <span></span> <Button outline className="buttom " type="primary" shape="round" size="large"  id="bot2">Sign up</Button>
                    </NavLink>
                  </NavItem>
                </Col>
                </Row>  
            </Nav>
            </Collapse>
            &nbsp; &nbsp;
        </Navbar>
        
       

  


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
