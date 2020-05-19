import React, { Component } from "react";
import { Form, Col, Input, Layout, Button } from "antd";
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
export default class Phase4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
      phase: 4,
    };
  }
  onClick = () => {
    if (this.state.isFinished) {
      window.location = "/depotPhase5";
    }
  };
  onFinish = () => {
    this.setState({ isFinished: !this.state.isFinished });
  };
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
              <Col>
                <StepperD phase={this.state.phase} />
              </Col>
              <Form
                {...formItemLayout}
                name="register"
                onFinish={this.onFinish}
                scrollToFirstError
              >
                <Form.Item
                  label="Lieu d'implantation du projet"
                  name="Lieu d'implantation du projet"
                  rules={[
                    {
                      required: true,
                      message: "Entrez SVP le Lieu d'implantation du projet!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Estimation du coût global du projet"
                  name="Estimation du coût global du projet"
                  rules={[
                    {
                      required: true,
                      message:
                        "Entrez SVP l'Estimation du coût global du projet'!",
                    },
                  ]}
                >
                  <Input placeholder="$$" />
                </Form.Item>
                <Form.Item
                  label="Apport personnel"
                  name="Apport personnel"
                  rules={[
                    {
                      required: true,
                      message: "Entrez SVP votre Apport personnel!",
                    },
                  ]}
                >
                  <Input placeholder="$$" />
                </Form.Item>
                <Form.Item
                  label="Financement sollicité"
                  name="Financement sollicité"
                  rules={[
                    {
                      required: true,
                      message: "Entrez SVP le Financement sollicité!",
                    },
                  ]}
                >
                  <Input placeholder="$$" />
                </Form.Item>
                <Col offset={14}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={this.onClick}
                  >
                    Passer à l'élément suivant
                  </Button>
                </Col>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
