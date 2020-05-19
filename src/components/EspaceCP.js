import React, { Component } from "react";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { DEMANDES } from "../Demandes";
import { Row, Col, Checkbox, Layout, Collapse } from "antd";
const { Content, Header, Footer } = Layout;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const plainOptions = [
  "Motivation et engagement à entreprendre",
  "Disposer d’un bon profil entrepreneurial",
  "Être âgé entre 22 ans et 45 ans",
  "Adéquation entre le profil entrepreneurial et le projet",
  "Avoir un Diplôme/Formation qui va avec l'idée du projet",
  "projet faisable et viable sur le plan commercial,technique et financier",
  "le projet respecte l’environnement",
];
function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}
const demande1 = DEMANDES[0];

export default class EspaceCP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demandes: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/demandes")
      .then((response) => response.json())
      .then((demande) => console.log(demande))
      .catch((error) => console.error("error :" + error));
  }

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
                  <Collapse defaultActiveKey={["1"]}>
                    <Panel showArrow={false} header="Demande 1" key="1">
                      <Row>
                        <Col>
                          <Card>
                            <CardBody>
                              <Table bordered striped>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Nom et Prénom</th>
                                    <th>Tel</th>
                                    <th>Email</th>
                                    <th> Date de naissance</th>
                                    <th>Diplôme</th>
                                    <th>Motivation</th>
                                    <th>Description du projet</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td> kamal marwane</td>
                                    <td>0642861161</td>
                                    <td>kamal.marwane97@mdo.com</td>
                                    <td>18/02/1998</td>
                                    <td>
                                      Diplôme d'ingénieur d'état en informatique
                                      de l'institut nationale des postes et des
                                      telecommunications{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      Notre projet vise à mettre en place une
                                      plateforme permettant aux jeune
                                      entreprenneurs ayant des idées innovantes,
                                      d'acquérir un financement adéquat pour la
                                      réalisation de leurs idée, en la
                                      transformant en un projet concret, ceci
                                      dit, on recourt à des proffessionnels pour
                                      nous assister en ce qui concerne la
                                      fesabilité de ces projets, ainsi, pour
                                      nous communiquer une estimation du
                                      financement mérité
                                    </td>
                                    <td>
                                      Notre projet vise à mettre en place une
                                      plateforme permettant aux jeune
                                      entreprenneurs ayant des idées innovantes,
                                      d'acquérir un financement adéquat pour la
                                      réalisation de leurs idée, en la
                                      transformant en un projet concret, ceci
                                      dit, on recourt à des proffessionnels pour
                                      nous assister en ce qui concerne la
                                      fesabilité de ces projets, ainsi, pour
                                      nous communiquer une estimation du
                                      financement mérité
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
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
