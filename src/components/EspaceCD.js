import React, { Component } from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader} from "reactstrap";
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
