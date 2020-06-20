import React, { Component } from "react";
import { Col, Layout, Button } from "antd";
import StepperD from "./StepperD";
const { Content, Header } = Layout;

export default class Phase3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
      phase: 1,
      status: "",
      isDisabled: true,
    };
  }
  componentDidMount() {
    this.getDemandeStatus();
    this.isDisabled();
  }
  getDemandeStatus() {
    fetch("http://localhost:8080/api/demande/1")
      .then((response) => response.json())
      .then((demande) => {
        this.setState({ status: demande.startut_av });
      })
      .catch((error) => console.error("error :" + error));
  }
  isDisabled = () => {
    if (this.state.status == "Detail") {
      this.setState({ isDisabled: false });
    }
  };
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
                Phase 2 : Tri de la demande
                <br />
                <br />
                <br />
                {this.state.status == "Detail" ? (
                  <div>Vous pouvez passer à l'étape suivante</div>
                ) : (
                  <div>
                    <div>Veuiller patienter le traiement de votre demande</div>
                    <br />{" "}
                    <div>
                      étude d'éligibilité du porteur de projet / de projet
                    </div>
                  </div>
                )}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Col>
              <Col offset={14}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => {
                    if (this.state.status == "étape4") {
                      window.location = "/depotPhase4";
                    }
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
