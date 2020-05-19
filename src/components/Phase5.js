import React from "react";
import { Form, Col } from "antd";
import StepperD from "./StepperD";
import { Link } from "react-router-dom";

export default class Phase5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
      phase: 5,
    };
  }
  render() {
    return (
      <div>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
          Phase 5 : Veuiller attendre la décision finale du Financement
        </Col>
        <Col>
          <StepperD phase={this.state.phase} />
        </Col>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Col>
          <Link to="/home">Home</Link>
        </Col>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
