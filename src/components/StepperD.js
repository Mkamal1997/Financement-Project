import React, { Component } from "react";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

export default class SteperD extends Component {
    constructor(props){
        super(props);
        this.state={
            current: 0,
        }
    }

  onChange = (current) => {
    this.setState({ current: this.props.phase });
  };

  render() {
    return (
      <div>
        <Steps current={this.state.current} onChange={this.onChange}>
          <Step
            title="Step 0"
            description="Remplir vos données personnels"
            style={{
              padding: 24,
              textAlign: "center",
            }}
          />
          <Step
            title="Step 1"
            description="Choisir un domaine fonctionnel."
            style={{
              padding: 24,
              textAlign: "center",
            }}
          />
          <Step
            title="Step 2"
            description="Saisir les informations sur l'idée."
            style={{
              padding: 24,
              textAlign: "center",
            }}
          />
          <Step
            title="Step 3"
            description="Tri des demandes."
            style={{
              padding: 24,
              textAlign: "center",
            }}
          />
          <Step
            title="Step 4"
            description="Donner plus de details."
            style={{
              padding: 24,
              textAlign: "center",
            }}
          />
          <Step
            title="Step 5"
            description="Décision finale."
            style={{
              padding: 24,
              textAlign: "center",
            }}
          />
        </Steps>
      </div>
    );
  }
}
