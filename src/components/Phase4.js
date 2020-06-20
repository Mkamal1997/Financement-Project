import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import {
  Card,
  Form,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  FormGroup,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "reactstrap";
import StepperD from "./StepperD";
import { Link } from "react-router-dom";
import axios from "axios";
const { Content, Header } = Layout;

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
export default class Phase4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lieu: "",
      budget: "",
      apport_personnel: "",
      financement_sollicité: "",
      phase: 2,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  initialState = {
    lieu: "",
    budget: "",
    apport_personnel: "",
    financement_sollicité: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    const detail = {
      lieu: this.state.lieu,
      budget: this.state.budget,
      apport_personnel: this.state.apport_personnel,
      financement_sollicité: this.state.financement_sollicité,
    };
    axios
      .post("http://localhost:8080/api/demandes", detail)
      .then((response) => {
        if (response.data != null) {
          this.setState(this.initialState);
          alert("Detail Saved Succesfully");
          window.location = "/depotPhase5";
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
      <Layout>
        <Header></Header>
        <Layout>
          <Content>
            <div>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 4 : Donner plus de details sur votre projet
              </Col>{" "}
              <br />
              <Col span={24}>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>DETAILS SUPPLEMENTAIRE</BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col>
                <StepperD phase={this.state.phase} />
              </Col>
              <Card className="border border-dark bg-dark text-white">
                <CardHeader></CardHeader>
                <Form
                  onReset={this.reset}
                  onSubmit={this.onSubmit}
                  onChange={this.onChange}
                >
                  <CardBody>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Lieu d'implantation du projet</label>
                          <Input
                            required
                            autoComplete="off"
                            type="test"
                            name="lieu"
                            value={this.state.lieu}
                            onChange={this.onChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter le lieu d'implantation de votre projet "
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Estimation du coût global du projet</label>
                          <Input
                            required
                            autoComplete="off"
                            type="test"
                            name="budget"
                            value={this.state.budget}
                            onChange={this.onChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter le Budget nécessaire "
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Apport personnel</label>
                          <Input
                            required
                            autoComplete="off"
                            type="test"
                            name="apport_personnel"
                            value={this.state.apport_personnel}
                            onChange={this.onChange}
                            className={"bg-dark text-white"}
                            placeholder="Entrez votre Apport personnel! "
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Financement Sollicité</label>
                          <Input
                            required
                            autoComplete="off"
                            type="test"
                            name="financement_sollicité"
                            value={this.state.financement_sollicité}
                            onChange={this.onChange}
                            className={"bg-dark text-white"}
                            placeholder="Entrez votre Financement Sollicité! "
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
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
