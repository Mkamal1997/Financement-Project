/*import React, {Component} from 'react';

import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import MyToast from './MyToast';
import axios from 'axios';

export default class Domaine extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.utilisateurChange = this.utilisateurChange.bind(this);
        this.submitUtilisateur = this.submitUtilisateur.bind(this);
    }

    initialState = {
        id:'', titre:'', description:'', imageURL:''
    };

    componentDidMount() {
        const domaineId = +this.props.match.params.id;
        if(domaineId) {
            this.findDomaineById(domaineId);
        }
        
    }
    getUsers() {
        // alert("Service:Oki!"+token);
        const token=localStorage.getItem("token")
        return axios.get(`http://localhost:8080/auth/admin/realms/finance-app/users`, {
           
              headers: {
                'Authorization': 'Bearer '+token
              }
            }
         
          ).catch(error => {
              console.log("error:"+error)
            })
         
      }
    getUserById(id) {
        // alert("Service:Oki!"+token);
        const token=localStorage.getItem("token")
        return axios.get(`http://localhost:8080/auth/admin/realms/finance-app/users`+id, {
           
              headers: {
                'Authorization': 'Bearer '+token
              }
            }
         
          ).catch(error => {
              console.log("error:"+error)
            })
         
      }
   
    deleteUser(id) {
        const token=localStorage.getItem("token")
          return axios.delete(`http://localhost:8080/auth/admin/realms/finance-app/users/`+id, {
              headers: {
                'Authorization': 'Bearer '+token,
              }
            }
         
          ).catch(error => {
              console.log("error:"+error)
            })
         
      }
      
      addUser(newUser) {
        const token=localStorage.getItem("token")
         
         return axios.post(`http://localhost:8080/auth/admin/realms/finance-app/users`,newUser, {
             headers: {
               'Authorization': 'Bearer '+token,
             }
           }
        
         ).catch(error => {
             console.log("errorAdd:"+error)
           })
        
      }
      
    updateUser(newUser,id) {
        //alert("Service:Oki!"+"user:"+JSON.stringify(newUser));
         //console.log("token:"+token)
         alert(JSON.stringify(newUser)+"--"+id)
         const token=localStorage.getItem("token")
         return axios.post(`http://localhost:8080/auth/realms/finance-app/account/`+id,newUser, {
             headers: {
               'Authorization': 'Bearer '+token,
             }
           }
        
         ).catch(error => {
             console.log("error:"+error)
           })
        
      }  
      handleSubmit = key => {
        fetch('http://localhost:9099/conditionses/'+key, {
            method: 'PATCH',
            body: JSON.stringify(
            {
                operation: this.refs["operation"+key].value,
                property: this.refs["property"+key].value,
                value: this.refs["value"+key].value
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer "+localStorage.getItem("token")
            }
        }).then(() => {
                 console.log('updated');})
        .catch(err => {
                console.error(err)
        });
      alert("Les données sont modifiées, Merci !");
      window.location.reload();
    }  
 

    render() {
       

        return (
            <div>
                <div>
                   
                </div>
                <Card className={"border "}>
                    <Card.Header className="title">
                        <FontAwesomeIcon icon = {faPlusSquare} /> Ajouter un Utilisateur
                    </Card.Header>
                    <Form id="domaineFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUserName">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="titre"
                                        //value={titre} onChange={this.domaineChange}
                                        placeholder="Entrer le nom d'utilisateur" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridDescription">
                                    <Form.Label>Prénom</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="description"
                                        //value={description} onChange={this.domaineChange}
                                        placeholder="Entrer le prénom d'utilisateur" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridImageURL">
                                    <Form.Label>Identifiant</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="imageURL"
                                        //value={imageURL} onChange={this.domaineChange}
                                        placeholder="Entrer l'identifiant d'utilisateur" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridImageURL">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="imageURL"
                                        //value={imageURL} onChange={this.domaineChange}
                                        placeholder="Entrer l'email' d'utilisateur" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridImageURL">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="imageURL"
                                        //value={imageURL} onChange={this.domaineChange}
                                        placeholder="Entrer l'identifiant d'utilisateur" />
                                </Form.Group>
                               
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="success" type="submit" id="bot2">
                                <FontAwesomeIcon icon={faSave} /> Save
                            </Button>{' '}
                            <Button size="sm" variant="info" type="reset" id="bot2">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>{' '}
                            <Button id="bot1" size="sm" variant="info" type="button">
                                <FontAwesomeIcon icon={faList} /> Utilisateurs
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        );
    }
}*/

import React, { Component } from "react";

import "./Style.css";
import {
  Card,
  Table,
  Image,
  ButtonGroup,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faEdit,
  faTrash,
  faStepBackward,
  faFastBackward,
  faStepForward,
  faFastForward,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MyToast from "./MyToast";
import axios from "axios";

export default class UtilisateurList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  /*sortData = () => {
        this.setState(state => ({
            sortToggle : !state.sortToggle
        }));
        this.findAllDomaines(this.state.currentPage);
    }*/

  /*findAllBooks() {
        fetch("http://localhost:8081/rest/books")
            .then(response => response.json())
            .then((data) => {
                this.setState({books: data});
            });
    };*/

  getUsers() {
    // alert("Service:Oki!"+token);

    const token = localStorage.getItem("token");
    return axios
      .get(`http://localhost:8080/auth/admin/realms/finance-app/users`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  /*deleteBook = (bookId) => {
        fetch("http://localhost:8081/rest/books/"+bookId, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then((book) => {
            if(book) {
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    books: this.state.books.filter(book => book.id !== bookId)
                });
            } else {
                this.setState({"show":false});
            }
        });
    };*/

  render() {
    const { users } = this.state;

    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={"domaine supprimé avec succès."}
            type={"danger"}
          />
        </div>
        <Card className={"border "}>
          <Card.Header>
            <div className="title" style={{ float: "left" }}>
              <FontAwesomeIcon icon={faList} /> Liste des Domaines
            </div>
            <div style={{ float: "right" }}>
              <InputGroup size="sm">
                <FormControl
                  placeholder="Search"
                  name="search"
                  className={"info-border"}
                />
                <InputGroup.Append>
                  <Button size="sm" variant="outline-info" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                  <Button size="sm" variant="outline-danger" type="button">
                    <FontAwesomeIcon icon={faTimes} />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Card.Header>
          <Card.Body>
            <Table bordered hover striped>
              <thead>
                <tr>
                  <th>Id </th>
                  <th>UserName</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>

                    <td>
                      <ButtonGroup>
                        <Link className="btn btn-sm btn-outline-primary">
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>{" "}
                        <Button size="sm" variant="outline-danger">
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>

          <Card.Footer></Card.Footer>
        </Card>
      </div>
    );
  }
}
