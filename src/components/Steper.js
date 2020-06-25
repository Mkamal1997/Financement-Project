import React, { Component } from "react";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

export default class Steper extends Component {
  state = {
    current: 0,
  };

  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <div>
        <Steps current={current} onChange={this.onChange}>
          <Step
            title="Step 1"
            description="Dépôt préliminaire"
            style={{
              padding: 24,
              textAlign: "center",
            }}
          />
          <Step
            title="Step 2"
            description="Tri des demandes."
            style={{
              padding: 24,
              textAlign: "center",
            }}
          />
          <Step
            title="Step 3"
            description="Donner plus de details."
            style={{
              padding: 24,
              textAlign: "center",
            }}
          />
          <Step
            title="Step 4"
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
