import React, { Component } from "react";
import { Form, Col, Checkbox, Row, Button, Layout } from "antd";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import StepperD from "./StepperD";
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

const plainOptions = [
  "Santé",
  "Agriculture",
  "Technologie",
  "Médecine",
  "Industrie",
  "Ingénierie",
  "E-commerce",
  "Aéronautique",
  "Automobile",
  "Commerce",
];

export default class Phase1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
      phase:1,
    };
  }

  onFinish = () => {
    this.setState({ isFinished: !this.state.isFinished });
  };

  render() {
    return (
      <div>
        <Layout>
          <Header></Header>
          <Layout>
            <Content>
              <br />
              <Row>
                <Col span={24}>
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>DEPOSER MA DEMANDE</BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                <Col>
                  <StepperD phase={this.state.phase} />
                </Col>
                <Form {...formItemLayout} name="register">
                  <Col
                    xs={{ span: 5, offset: 1 }}
                    lg={{ span: 24, offset: 10 }}
                  >
                    Phase 1 : Choisir un domaine
                  </Col>
                  <br /> <br />
                  <Form.Item label="Domaine fonctionnel">
                    <Checkbox.Group options={plainOptions} />
                  </Form.Item>
                </Form>
                <br /> <br />
              </Row>
              <Row>
                <Col offset={14}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={() => {
                      window.location = "/depotPhase2";
                    }}
                  >
                    Passer à l'élément suivant
                  </Button>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
