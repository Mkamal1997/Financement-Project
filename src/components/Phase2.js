import React, { Component } from "react";
/*import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faSave, faPlusSquare } from "fontawesome/free-solid-svg-icons";*/
import {
  Card,
  Form,
  Button,
  Col,
  Row,
  FormGroup,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import StepperD from "./StepperD";
import axios from "axios";
const { Content, Header } = Layout;

export default class Phase2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptif: "",
      isFinished: false,
      phase: 2,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  initialState = {
    descriptif: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    const detail = {
      descriptif: this.state.descriptif,
    };
    axios
      .post("http://localhost:8080/api/demandes", detail)
      .then((response) => {
        if (response.data != null) {
          this.setState(this.initialState);
          alert("Detail Saved Succesfully");
          window.location = "/depotPhase3";
        }
      });
  };
  reset = () => {
    this.setState(() => this.initialState);
  };
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <Layout>
          <Header></Header>
          <Layout>
            <Content>
              <Col span={24}>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>DETAILS DE MA DEMANDE</BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Row>
                <Col>
                  <StepperD phase={this.state.phase} />
                </Col>
              </Row>
              <Card className="border border-dark bg-dark text-white">
                <CardHeader></CardHeader>
                <Form
                  onReset={this.reset}
                  onSubmit={this.onSubmit}
                  onChange={this.onChange}
                  id="bookFormId"
                >
                  <CardBody>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Detail du Projet</label>
                          <Input
                            required
                            autoComplete="off"
                            type="test"
                            name="descriptif"
                            value={this.state.descriptif}
                            onChange={this.onChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter book descriptif"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter style={{ textAlign: "right" }}>
                    <Button size="sm" variant="success" type="submit">
                      ADD
                    </Button>
                    {"    "}
                    <Button size="sm" variant="info" type="reset">
                      reset
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

/*
import { Form, Input, Row, Col, Button, AutoComplete, Layout } from "antd";
import StepperD from "./StepperD";
const { Content, Header } = Layout;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default class Phase2 extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.onSubmit = this.onSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
    isFinished: false,
      phase:2, 
  onClick = () => {
    if (this.state.isFinished) {
      window.location = "/depotPhase3";
    }
  };
  initialState = { description: "" };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  reset = () => {
    this.setState(() => this.initialState);
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    /*fetch("http://localhost:8080/api/demandes", {
      method: "POST",
      body: JSON.stringify({ description: this.state.description }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((demande) => {
        console.log(JSON.stringify({ demande }));
      })
      .catch((error) => console.error("error :" + error));
      
  };
  onFinish = () => {
    this.setState({ isFinished: !this.state.isFinished });
  };
  render() {
    const { description } = this.state;
    return (
      <div>
        <Layout>
          <Header></Header>
          <Layout>
            <Content>
              <br />
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 2 : Informations sur le projet
              </Col>
              <br /> <br />
              <br />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

<Col>
                <StepperD phase={this.state.phase} />
              </Col>
              
              <Form
                onSubmit={this.onSubmit}
                onReset={this.reset}
                {...formItemLayout}
                name="register"
                onFinish={this.onFinish}
                initialValues={{
                  prefix: "212",
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="Description du projet"
                  label="Description du projet"
                  rules={[
                    {
                      required: true,
                      message: "Entrer SVP le detail du projet!",
                    },
                  ]}
                >
                  <TextArea
                    type="TextArea"
                    onReset={this.reset}
                    name="description"
                    value={description}
                    onChange={this.changeHandler}
                    rows={5}
                    placeholder="Décriver votre projet / Produit(service) / marché cible"
                  />
                </Form.Item>
                <Col offset={14}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onSubmit={this.onSubmit}
                  >
                    ADD
                  </Button>
                  <Button
                    htmlType="reset"
                    className="login-form-button"
                    onReset={this.reset}
                  >
                    RESET
                  </Button>
                </Col>
              </Form>
              */
