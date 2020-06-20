import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Row, Col, Checkbox, Layout, Collapse } from "antd";
import axios from "axios";
const { Content, Header, Footer } = Layout;
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "Motivation et engagement à entreprendre",
  "Disposer d’un bon profil entrepreneurial",
  "Être âgé entre 22 ans et 45 ans",
  "Adéquation entre le profil entrepreneurial et le projet",
  "Avoir un Diplôme/Formation qui va avec l'idée du projet",
  "projet faisable et viable sur le plan commercial,technique et financier",
  "le projet respecte l’environnement",
];
const defaultCheckedList = [];
export default class EspaceCP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demandes: [],
      isLoading: false,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      isDisabled: false,
    };
  }

  componentDidMount() {
    this.getAllDemandes();
    this.setState({ isLoading: true });
  }
  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  onClick = () => {
    const demande = { statut_av: "Detail" };
    this.setState({ isDisabled: true });
    if (this.state.checkAll) {
      alert(
        "vous avez validé cette demande, une notification est envoyé au client: " +
          `${this.state.demandes.clientNom}` +
          " " +
          `${this.state.demandes.clientPrénom}` +
          " pour l'informer"
      );
      axios
        .put("http://localhost:8080/api/demandes/{1}", demande)
        .then((response) => {
          if (response.data != null) {
            alert(" Updated Succesfully");
            console.log(response.data);
          }
        });
    } else {
      alert(
        "Un avis est envoyé au client pour lui demander de compléter ça demande"
      );
    }
  };
  getAllDemandes() {
    fetch("http://localhost:8080/api/demandes")
      .then((response) => response.json())
      .then((demande) => {
        this.setState({ demandes: demande, isLoading: false });
      })
      .catch((error) => console.error("error :" + error));
  }

  /* updateDemande() {
    fetch("http://localhost:8080/api/demandes/{1}");
  }
  */

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
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 14, offset: 10 }}>
                  Liste des demandes soumises
                  <br />
                  <br />
                </Col>

                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 20, offset: 2 }}>
                  <Collapse>
                    {this.state.demandes.map((demande) => (
                      <Panel
                        header={`Demande ${demande.id_idée}`}
                        key={demande.id_idée}
                      >
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
                                      <th>Description du projet</th>
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

                                      <td>{demande.descriptif}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col>
                            <div>
                              <div className="site-checkbox-all-wrapper">
                                <Checkbox
                                  indeterminate={this.state.indeterminate}
                                  onChange={this.onCheckAllChange}
                                  checked={this.state.checkAll}
                                  disabled={this.state.isDisabled}
                                >
                                  Check all
                                </Checkbox>
                                <button
                                  onClick={this.onClick}
                                  disabled={this.state.isDisabled}
                                >
                                  Valider
                                </button>
                              </div>

                              <br />
                              <br />
                              <CheckboxGroup
                                options={plainOptions}
                                value={this.state.checkedList}
                                onChange={this.onChange}
                                disabled={this.state.isDisabled}
                              />
                            </div>
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