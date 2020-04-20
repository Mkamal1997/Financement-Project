import React, { Component } from "react";
import Footer from "./Footer";
import { Row, Col, Button, AutoComplete, Layout, Steps } from "antd";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Phase0 from "./Phase0";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import Phase4 from "./Phase4";
import Phase5 from "./Phase5";
const { Content, Sider, Header } = Layout;
const { Step } = Steps;

export default class Formulaire2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: 0,
      current: 0,
      isFinished: false,
    };
  }

  /*callbackHandlerFunction0 = (clickStatus) => {
    this.setState({
      isFinished: clickStatus,
    });
  }; */

  Passer = () => {
    if (this.state.isShow < 5) {
      this.setState((state) => ({ isShow: state.isShow + 1 }));
      this.setState((state) => ({ current: state.current + 1 }));
    } else {
      this.state.isShow = 5;
      this.state.current = 5;
    }
  };
  Retourner = () => {
    if (this.state.isShow > 0) {
      this.setState((state) => ({ isShow: state.isShow - 1 }));
      this.setState((state) => ({ current: state.current - 1 }));
    } else {
      this.state.isShow = 0;
      this.state.current = 0;
    }
  };
  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });
  };
  render() {
    const { current } = this.state;

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
                <Col span={24}>
                  <Steps
                    type="navigation"
                    size="small"
                    current={current}
                    onChange={this.onChange}
                    className="site-navigation-steps"
                  >
                    <Step status="finish" title="Phase 0" disabled />
                    <Step status="process" title="Phase 1" disabled />
                    <Step status="process" title="Phase 2" disabled />
                    <Step status="process" title="Phase 3" disabled />
                    <Step status="process" title="Phase 4" disabled />
                    <Step status="process" title="Phase 5" disabled />
                  </Steps>
                  <br />
                  <br />
                  <br />
                </Col>
              </Row>
              <div>
                {this.state.isShow == 0 ? <Phase0 /> : null}
                {this.state.isShow == 1 ? <Phase1 /> : null}
                {this.state.isShow == 2 ? <Phase2 /> : null}
                {this.state.isShow == 3 ? <Phase3 /> : null}
                {this.state.isShow == 4 ? <Phase4 /> : null}
                {this.state.isShow == 5 ? <Phase5 /> : null}
                <Row>
                  <Col offset={1}>
                    <Button
                      onClick={this.Retourner}
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Passer à l'élément précedant
                    </Button>
                  </Col>
                  <Col offset={14}>
                    <Button
                      onClick={this.Passer}
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Passer à l'élément suivant
                    </Button>
                  </Col>
                </Row>
              </div>
            </Content>
            <Sider></Sider>
          </Layout>
          <div>
            <Footer />
          </div>
        </Layout>
      </div>
    );
  }
}


/*handleClickInParent={this.callbackHandlerFunction0} */