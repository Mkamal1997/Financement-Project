import React, { Component } from "react";
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
    this.state = {
      isFinished: false,
      phase:2
    };
  }
  onClick = () => {
    if (this.state.isFinished) {
      window.location = "/depotPhase3";
    }
  };
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
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 2 : Informations sur le projet
              </Col>
              <br /> <br />
              <Col>
                  <StepperD phase={this.state.phase}/>
                </Col>
              <Form
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
                    rows={5}
                    placeholder="Décriver votre projet / Produit(service) / marché cible"
                  />
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
              <br />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
