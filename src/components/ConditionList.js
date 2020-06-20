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

export default class ConditionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditions: [],
      search: "",
      currentPage: 1,
      conditionsPerPage: 5,
      /*sortToggle : true*/
    };
  }

  /*sortData = () => {
        this.setState(state => ({
            sortToggle : !state.sortToggle
        }));
        this.findAllConditions(this.state.currentPage);
    }*/

  componentDidMount() {
    this.findAllConditions(this.state.currentPage);
  }

  /*findAllBooks() {
        fetch("http://localhost:8081/rest/books")
            .then(response => response.json())
            .then((data) => {
                this.setState({books: data});
            });
    };*/

  findAllConditions(currentPage) {
    currentPage -= 1;
    let sortDir = this.state.sortToggle ? "asc" : "desc";
    axios
      .get(
        "http://localhost:8081/api/conditions?pageNumber=" +
          currentPage +
          "&pageSize=" +
          this.state.conditionsPerPage +
          "&sortBy=id&sortDir=" +
          sortDir
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          conditions: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1,
        });
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

  deleteCondition = (conditionId) => {
    axios
      .delete("http://localhost:8081/api/conditions/" + conditionId)
      .then((response) => {
        if (response.data != null) {
          this.setState({ show: true });
          setTimeout(() => this.setState({ show: false }), 3000);
          this.setState({
            conditions: this.state.conditions.filter(
              (condition) => condition.id !== conditionId
            ),
          });
        } else {
          this.setState({ show: false });
        }
      });
  };

  changePage = (event) => {
    let targetPage = parseInt(event.target.value);
    if (this.state.search) {
      this.searchData(targetPage);
    } else {
      this.findAllConditions(targetPage);
    }
    this.setState({
      [event.target.name]: targetPage,
    });
  };

  firstPage = () => {
    let firstPage = 1;
    if (this.state.currentPage > firstPage) {
      if (this.state.search) {
        this.searchData(firstPage);
      } else {
        this.findAllConditions(firstPage);
      }
    }
  };

  prevPage = () => {
    let prevPage = 1;
    if (this.state.currentPage > prevPage) {
      if (this.state.search) {
        this.searchData(this.state.currentPage - prevPage);
      } else {
        this.findAllConditions(this.state.currentPage - prevPage);
      }
    }
  };

  lastPage = () => {
    let condition = Math.ceil(
      this.state.totalElements / this.state.conditionsPerPage
    );
    if (this.state.currentPage < condition) {
      if (this.state.search) {
        this.searchData(condition);
      } else {
        this.findAllConditions(condition);
      }
    }
  };

  nextPage = () => {
    if (
      this.state.currentPage <
      Math.ceil(this.state.totalElements / this.state.conditionsPerPage)
    ) {
      if (this.state.search) {
        this.searchData(this.state.currentPage + 1);
      } else {
        this.findAllConditions(this.state.currentPage + 1);
      }
    }
  };

  searchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  cancelSearch = () => {
    this.setState({ search: "" });
    this.findAllConditions(this.state.currentPage);
  };

  searchData = (currentPage) => {
    currentPage -= 1;
    axios
      .get(
        "http://localhost:8081/api/conditions/search/" +
          this.state.search +
          "?page=" +
          currentPage +
          "&size=" +
          this.state.conditionsPerPage
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          conditions: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1,
        });
      });
  };

  render() {
    const { conditions, currentPage, totalPages, search } = this.state;

    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={"condition supprimé avec succès."}
            type={"danger"}
          />
        </div>
        <Card className={"border "}>
          <Card.Header>
            <div className="title" style={{ float: "left" }}>
              <FontAwesomeIcon icon={faList} /> Liste des Conditions
            </div>
            <div style={{ float: "right" }}>
              <InputGroup size="sm">
                <FormControl
                  placeholder="Search"
                  name="search"
                  value={search}
                  className={"info-border"}
                  onChange={this.searchChange}
                />
                <InputGroup.Append>
                  <Button
                    size="sm"
                    variant="outline-info"
                    type="button"
                    onClick={this.searchData}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    type="button"
                    onClick={this.cancelSearch}
                  >
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
                  <th onClick={this.sortData}>
                    Id{" "}
                    <div
                      className={
                        this.state.sortToggle
                          ? "arrow arrow-down"
                          : "arrow arrow-up"
                      }
                    >
                      {" "}
                    </div>
                  </th>
                  <th>Titre</th>
                  <th>Description</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {conditions.length === 0 ? (
                  <tr align="center">
                    <td colSpan="7">No conditions Available.</td>
                  </tr>
                ) : (
                  conditions.map((condition) => (
                    <tr key={condition.id}>
                      <td>{condition.id}</td>
                      <td>{condition.titre}</td>
                      <td>{condition.description}</td>

                      <td>
                        <ButtonGroup>
                          <Link
                            to={"editcondition/" + condition.id}
                            className="btn btn-sm btn-outline-primary"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>{" "}
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={this.deleteCondition.bind(
                              this,
                              condition.id
                            )}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
          {conditions.length > 0 ? (
            <Card.Footer>
              <div style={{ float: "left" }}>
                Showing Page {currentPage} of {totalPages}
              </div>
              <div style={{ float: "right" }}>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <Button
                      className="style_botton"
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === 1 ? true : false}
                      onClick={this.firstPage}
                    >
                      <FontAwesomeIcon icon={faFastBackward} /> First
                    </Button>
                    <Button
                      className="style_botton"
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === 1 ? true : false}
                      onClick={this.prevPage}
                    >
                      <FontAwesomeIcon icon={faStepBackward} /> Prev
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    className={"page-num "}
                    name="currentPage"
                    value={currentPage}
                    onChange={this.changePage}
                  />
                  <InputGroup.Append>
                    <Button
                      className="style_botton"
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === totalPages ? true : false}
                      onClick={this.nextPage}
                    >
                      <FontAwesomeIcon icon={faStepForward} /> Next
                    </Button>
                    <Button
                      className="style_botton"
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === totalPages ? true : false}
                      onClick={this.lastPage}
                    >
                      <FontAwesomeIcon icon={faFastForward} /> Last
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </Card.Footer>
          ) : null}
        </Card>
      </div>
    );
  }
}
