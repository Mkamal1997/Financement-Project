import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Form,
  FormGroup,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Checkbox,
  Layout,
  Collapse,
  Menu,
  Dropdown,
  Modal,
  Input,
  InputNumber,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Content, Header, Footer } = Layout;
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;

export default class EspaceCP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demandes: [],
      isLoading: false,
      visibleA: false,
      visibleB: false,
      isDisabled: false,
      SommeFin: 0,
      avisFin: "",
      statut_av: "",
    };
    this.onSubmitApprove = this.onSubmitApprove.bind(this);
    this.onSubmitReject = this.onSubmitReject.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onClickDropdown = ({ key }) => {};
  componentDidMount() {
    this.getAllDemandes();
    this.setState({ isLoading: true });
  }

  getAllDemandes() {
    fetch("http://localhost:8080/api/demandes")
      .then((response) => response.json())
      .then((demande) => {
        this.setState({ demandes: demande, isLoading: false });
      })
      .catch((error) => console.error("error :" + error));
  }

  /* updateDemande() {
    fetch("http://localhost:8080/api/demandes/{}");
  }
  */

  showModalApprove = () => {
    this.setState({
      visibleA: true,
    });
  };
  showModalDisapprove = () => {
    this.setState({
      visibleB: true,
    });
  };
  onSubmitApprove = (event) => {
    event.preventDefault();
    this.setState({ visibleA: false, isDisabled: true });
  };
  onSubmitReject = (event) => {
    event.preventDefault();
    this.setState({ visibleB: false, isDisabled: true });
  };
  reset = () => {
    this.setState(() => this.initialState);
  };
  initialState = { SommeFin: 0, avisFin: "" };
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleCancelA = (e) => {
    this.setState({
      visibleA: false,
    });
  };
  handleCancelB = (e) => {
    this.setState({
      visibleB: false,
    });
  };

  render() {
    const menu = (
      <Menu onClick={this.onClickDropdown}>
        <Menu.Item key="Financer le Projet" onClick={this.showModalApprove}>
          Financer le Projet
        </Menu.Item>
        <Menu.Item
          key="Ne pas Financer le Projet"
          onClick={this.showModalDisapprove}
        >
          Ne pas Financer le Projet
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Layout>
          <Header></Header>
          <Layout>
            <Content>
              <Col span={24}>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>ESPACE PERSONNEL </BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Content>

            <Content>
              <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 14, offset: 10 }}>
                  Liste des demandes triées
                  <br />
                  <br />
                </Col>

                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 21, offset: 1 }}>
                  <Collapse>
                    {this.state.demandes.map((demande) => (
                      <Panel
                        header={`Demande ${demande.id_idée}`}
                        key={demande.id_idée}
                      >
                        <i class="fa fa-check" aria-hidden="true"></i>
                        <Row>
                          <Col>
                            <Card>
                              <CardBody>
                                <Table bordered striped>
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>intitulé du projet</th>
                                      <th>Candidat</th>
                                      <th>Email</th>
                                      <th> Date de naissance</th>
                                      <th>Diplôme</th>
                                      <th>Motivation</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">{demande.id_idée}</th>
                                      <td> {demande.intitulé_projet}</td>
                                      <td>
                                        {demande.client.nom}{" "}
                                        {demande.client.prénom}
                                      </td>
                                      <td>{demande.client.email}</td>
                                      <td>
                                        {demande.client.date_de_naissance}
                                      </td>
                                      <td>{demande.client.diplome}</td>
                                      <td>{demande.client.motivation}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                                <Table bordered striped>
                                  <thead>
                                    <tr>
                                      <th>Description du projet</th>
                                      <th>lieu</th>
                                      <th>budget</th>
                                      <th>apport personnel</th>
                                      <th>financement sollicité</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>{demande.descriptif}</td>
                                      <td>{demande.lieu}</td>
                                      <td>{demande.budget}</td>
                                      <td>{demande.apport_personnel}</td>
                                      <td>{demande.financement_sollicité}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col>
                            {" "}
                            <Dropdown
                              overlay={menu}
                              disabled={this.state.isDisabled}
                            >
                              <a
                                className="ant-dropdown-link"
                                onClick={(e) => e.preventDefault()}
                              >
                                Décider <DownOutlined />
                              </a>
                            </Dropdown>
                          </Col>
                          <Col>
                            {" "}
                            <Modal
                              title="Financer le Projet"
                              visible={this.state.visibleA}
                              onCancel={this.handleCancelA}
                              okButtonProps={{ disabled: true }}
                              cancelButtonProps={{ disabled: true }}
                            >
                              {" "}
                              <Card className="border border-dark bg-dark text-white">
                                <CardHeader></CardHeader>
                                <Form
                                  onReset={this.reset}
                                  onSubmit={this.onSubmitApprove}
                                  onChange={this.onChange}
                                >
                                  <CardBody>
                                    <Row>
                                      <Col>
                                        <FormGroup>
                                          <label>Donner votre avis</label>
                                          <textarea
                                            required
                                            autoComplete="off"
                                            type="test"
                                            name="avisFin"
                                            value={this.state.avisFin}
                                            onChange={this.onChange}
                                            className={"bg-dark text-white"}
                                            placeholder="Donner votre avis concernant ce projet "
                                            style={{ width: "170%" }}
                                          ></textarea>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col>
                                        <FormGroup>
                                          <label>Somme accordé</label>
                                          <Input
                                            required
                                            autoComplete="off"
                                            type="test"
                                            name="SommeFin"
                                            value={this.state.SommeFin}
                                            onChange={this.onChange}
                                            className={"bg-dark text-white"}
                                            placeholder="Enter le Somme accordée à ce projet "
                                          />
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                  <CardFooter style={{ textAlign: "right" }}>
                                    <Button
                                      size="sm"
                                      variant="success"
                                      type="submit"
                                    >
                                      Submit/Send
                                    </Button>
                                    {"    "}
                                    <Button
                                      size="sm"
                                      variant="info"
                                      type="reset"
                                    >
                                      reset
                                    </Button>
                                  </CardFooter>
                                </Form>
                              </Card>
                            </Modal>
                            ;
                          </Col>
                          <Col>
                            <Modal
                              title="Ne pas Financer le Projet"
                              visible={this.state.visibleB}
                              onCancel={this.handleCancelB}
                              okButtonProps={{ disabled: true }}
                              cancelButtonProps={{ disabled: true }}
                            >
                              {" "}
                              <Card className="border border-dark bg-dark text-white">
                                <CardHeader></CardHeader>
                                <Form
                                  onReset={this.reset}
                                  onSubmit={this.onSubmitReject}
                                  onChange={this.onChange}
                                >
                                  <CardBody>
                                    <Row>
                                      <Col>
                                        <FormGroup>
                                          <label>Donner votre avis</label>
                                          <textarea
                                            required
                                            autoComplete="off"
                                            type="test"
                                            name="avisFin"
                                            value={this.state.avisFin}
                                            onChange={this.onChange}
                                            className={"bg-dark text-white"}
                                            placeholder="Donner votre avis concernant ce projet "
                                            style={{ width: "170%" }}
                                          ></textarea>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                  <CardFooter style={{ textAlign: "right" }}>
                                    <Button
                                      size="sm"
                                      variant="success"
                                      type="submit"
                                    >
                                      Submit/Send
                                    </Button>
                                    {"    "}
                                    <Button
                                      size="sm"
                                      variant="info"
                                      type="reset"
                                    >
                                      reset
                                    </Button>
                                  </CardFooter>
                                </Form>
                              </Card>
                            </Modal>
                          </Col>
                        </Row>
                      </Panel>
                    ))}
                  </Collapse>
                </Col>
              </Row>
            </Content>

            <Layout>
              <Footer></Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

/*
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const plainOptions = [
  "éligibilité du porteur de projet",
  "éligibilité du projet",
  "l'idée, est-elle innovante ?",
];
function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}
const demande1 = DEMANDES[0];

export default class EspaceCD extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header></Header>
          <Layout>
            <Content>
              <Col span={24}>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>ESPACE PERSONNEL </BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Content>
            <Content>
              <Row>
                <Col span={12}>
                  Conditions d'éligibilité du porteur de projet :
                  <ul>
                    <li>Etre motivé et engagé à entreprendre</li>
                    <li>Disposer d’un bon profil entrepreneurial</li>
                    <li>
                      Être âgé entre 22 ans et 45 ans au moment du dépôt du
                      dossier de candidature
                    </li>
                    <li>
                      Avoir une adéquation entre son profil entrepreneurial et
                      son proje
                    </li>
                    <li>
                      Avoir un Diplôme/Formation qui va avec l'idée du projet
                    </li>
                  </ul>
                </Col>
                <Col span={12}>
                  Conditions d'éligibilité du projet :
                  <ul>
                    <li>
                      Les projets faisables et viables sur le plan commercial,
                      technique et financier
                    </li>
                    <li> Les projets qui respectent l’environnement</li>
                  </ul>
                </Col>
              </Row>
              <br />
              <br />
            </Content>
            <Content>
              <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 14, offset: 10 }}>
                  Liste des demandes soumises
                  <br />
                  <br />
                </Col>

                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 20, offset: 2 }}>
                  <Collapse defaultActiveKey={["1"]}>
                    <Panel header="Demande 1" key="1">
                      <Row>
                        <Col>
                          <Card>
                            <CardHeader className="bg-primary text-white">
                              Detail de la Demande
                            </CardHeader>
                            <CardBody>
                              <dl className="row p-1">
                                <dt className="col-6">Nom et Prénom</dt>
                                <dd className="col-6">
                                  {demande1.nom} {demande1.prénom}
                                </dd>

                                <dt className="col-6">Tel</dt>
                                <dd className="col-6">{demande1.Tel}</dd>
                                <dt className="col-6">Email</dt>
                                <dd className="col-6">{demande1.Email}</dd>
                                <dt className="col-6"> Date de naissance</dt>
                                <dd className="col-6">
                                  {demande1.Date_de_naissance}
                                </dd>
                                <dt className="col-6">Diplôme</dt>
                                <dd className="col-6">{demande1.Diplôme}</dd>
                                <dt className="col-6">Motivation</dt>
                                <dd className="col-6">{demande1.Motivation}</dd>
                                <dt className="col-6">Description du projet</dt>
                                <dd className="col-6">
                                  {demande1.Description_du_projet}
                                </dd>
                              </dl>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col>
                          <br />
                          <Checkbox.Group
                            options={plainOptions}
                            onChange={onChange}
                          />
                        </Col>
                      </Row>
                    </Panel>
                    <Panel showArrow={false} header="Demande 2" key="2">
                      <p>{text}</p>
                    </Panel>
                    <Panel showArrow={false} header="Demande 3" key="3">
                      <p>{text}</p>
                    </Panel>
                    <Panel showArrow={false} header="Demande 4" key="4">
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
                </Col>
              </Row>
            </Content>

            <Layout>
              <Footer></Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
*/
