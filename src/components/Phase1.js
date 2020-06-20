import React, { Component } from "react";
import { Menu, Button, Dropdown, Row, Col } from "antd";
import axios from "axios";

export default class Phase1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      domaines: [],
      domaineSelected: "",
      isDisabled: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick = ({ key }) => {
    this.setState(
      {
        domaineSelected: this.state.domaines[key - 1].domaine,
        isDisabled: true,
      },
      () => {
        const demande = { domaine: this.state.domaineSelected };
        axios
          .post("http://localhost:8080/api/demandes", demande)
          .then((response) => {
            if (response.data != null) {
              this.setState(this.initialState);
              alert("Demande Saved Succesfully");
              console.log(response.data);
              /* window.location = "/depotPhase1";*/
            }
          });
      }
    );
  };
  handleDisable = () => {
    this.setState({});
  };
  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };
  componentDidMount() {
    this.getAllDomaines();
  }
  getAllDomaines() {
    fetch("http://localhost:8080/api/domaines")
      .then((response) => response.json())
      .then((domaine) => {
        this.setState({ domaines: domaine });
      })
      .catch((error) => console.error("error :" + error));
  }
  render() {
    const menu = this.state.domaines.map((item) => (
      <Menu.Item key={item.id_domaine}>{item.domaine}</Menu.Item>
    ));
    return (
      <Row>
        <Col>
          <Dropdown
            disabled={this.state.isDisabled}
            overlay={<Menu onClick={this.onClick}> {menu}</Menu>}
            onVisibleChange={this.handleVisibleChange}
            visible={this.state.visible}
            trigger={["click"]}
          >
            <a className="ant-dropdown-link">Domaine Fonctionnel</a>
          </Dropdown>
        </Col>
      </Row>
    );
  }
}

/*



const onloadOptions = [
  { label: "Sport", value: "Sport" },
  { label: "Computer Science", value: "Computer Science" },
  { label: "Agriculture", value: "Agriculture" },
  { label: "High Tech", value: "High Tech" },
  { label: "Ingénierie", value: "Ingénierie" },
]; 

export default class Phase1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: [],
      indeterminate: true,
      isDisabled: false,
      domaines: [],
    };
  }
  componentDidMount() {
    this.getAllDomaines();
  }
  getAllDomaines() {
    fetch("http://localhost:8080/api/domaines")
      .then((response) => response.json())
      .then((domaine) => {
        this.setState({ domaines: domaine });
        console.log(this.state.domaines[0]);
      })
      .catch((error) => console.error("error :" + error));
  }
  onClick = (e) => {
    this.setState({ isDisabled: true });
  };
  onCheck = (e) => {
    const values = onloadOptions.map((record) => record.value);
    this.setState({
      checkedList: e.target.checked ? values : [],
    });
  };

  onGroupChange = (checkedList) => {
    this.setState({
      checkedList,
    });
  };
  onClickButton = () => {
    this.setState({ isDisabled: false, checkedList: [] });
  };

  render() {
    return (
      <div>
        <Checkbox.Group
          options={onloadOptions}
          onChange={this.onGroupChange}
          disabled={this.state.isDisabled}
          value={this.state.checkedList}
          onClick={this.onClick}
          style={{ width: "100%", marginLeft: "15%", fontWeight: "dark" }}
        ></Checkbox.Group>
        <Button onClick={this.onClickButton}>Changer le Domaine</Button>
      </div>
    );
  }
}























const plainOptions = [
  "Technologie",
  "Sport",
  "Computer Science",
  "Agriculture",
  "High Tech",
  "Medecine",
  "Ingénierie",
  "E-commerce",
  "Aéronautique",
  "Automobile",
  "Commerce",
];
const defaultCheckedList = [];
export default class Phase1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
      isDisabled: false,
      isChecked: "",
    };
  }
  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      // checkAll: checkedList.length === plainOptions.length,
    });
  };
  onCheck = (e) => {
    const values = plainOptions;
    this.setState({ checkedList: e.target.checked ? values : [] });
  };
  onClick = (e) => {
    this.setState({ isDisabled: true, isClicked: e.target.checked });
    //this.setState({selected:e.target.checked})
    console.log(this.state.isClicked);
    alert(
      "vous avez validé cette demande, une notification est envoyé au client: " +
        `${this.props.clientNom}` +
        " " +
        `${this.props.clientPrénom}` +
        " pour l'informer"
    );
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <CheckboxGroup
          style={{ width: "100%", marginLeft: "5%", fontWeight: "lighter" }}
          options={plainOptions}
          value={this.state.checkedList}
          onChange={this.onChange}
          disabled={this.state.isDisabled}
          onClick={this.onClick}
          checked={this.state.isChecked}
        />
      </div>
    );
  }
}



















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








              export default class Phase1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 1,
      isChecked: "",
      checkedItems: new Map(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    console.log(item);
    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }
  render() {
    const checkboxes = [
      {
        name: "Domaine 1",
        key: "checkBox1",
        label: "Domaine 1",
      },
      {
        name: "Domaine 2",
        key: "checkBox2",
        label: "Domaine 2",
      },
      {
        name: "Domaine 3",
        key: "checkBox3",
        label: "Domaine 3",
      },
      {
        name: "Domaine 4",
        key: "checkBox4",
        label: "Domaine 4",
      },
    ];
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
                <legend>
                  {" "}
                  <h1>Domaine Fonctionnel</h1>
                </legend>
                <div style={{ textAlign: "center" }}>
                  <React.Fragment>
                    {checkboxes.map((item) => (
                      <Row span={6}>
                        <label key={item.key}>
                          {item.name}
                          <Checkbox
                            name={item.name}
                            checked={this.state.checkedItems.get(item.name)}
                            onChange={this.handleChange}
                          />
                        </label>
                      </Row>
                    ))}
                  </React.Fragment>
                </div>
                <br /> <br />
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
                */
