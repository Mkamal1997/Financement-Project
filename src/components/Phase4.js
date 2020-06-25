import React from "react";
import { Form, Col } from "antd";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import StepperD from "./StepperD";

export default class Phase4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
      status: {},
      phase: 3,
    };
  }
  render() {
    return (
      <div>
        <Col span={24}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>PHASE 2</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col>
          <StepperD phase={this.state.phase} />
        </Col>
        <br />
        <br />
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
          Phase 4
        </Col>
        <br />
        {this.state.status.statut_av == "Approuvée" ? (
          <div>Félicitations, Votre Demande est Approuvée</div>
        ) : (
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
            Veuiller attendre la décision finale du Financement
          </Col>
        )}
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
