import React, { Component } from "react";
import { Col, Layout, Button } from "antd";
import StepperD from "./StepperD";
const { Content, Header } = Layout;

export default class Phase3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
      phase:3,
    };
  }

  onFinish = () => {
    if (this.state.isFinished) {
      this.setState({ isFinished: !this.state.isFinished });
    }
  };
  render() {
    return (
      <div>
        <Layout>
          <Header></Header>
          <Layout>
            <Content>
              <Col>
                <StepperD phase={this.state.phase} />
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 3 : Tri de la demande ( veuiller patienter )
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                étude d'éligibilité du porteur de projet / de projet
                <br />
                <br />
              </Col>
              <Col offset={14}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => {
                    window.location = "/depotPhase4";
                  }}
                >
                  Passer à l'élément suivant
                </Button>
              </Col>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
