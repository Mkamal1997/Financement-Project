import React from "react";
import { Layout, Breadcrumb, Col, Row, Card } from "antd";
import Header from "./HeaderComponent";
import ProjectsMenu from "./ProjectsMenu";
import Steper from "./Steper";
import Footer from "./Footer";
import { Typography } from "antd";

const { Paragraph } = Typography;

const { Content } = Layout;

export default function Home(){
 
    return (
      <Layout>
        <Header />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="content1"
            style={{
              backgroundColor: "512DA8",
              paddingLeft: 300,
              paddingTop: 75,
              margin: 0
            }}
          >
            <ProjectsMenu />
          </Content>

          <Content
            className="content2"
            style={{
              color: "e37a09",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Paragraph>
              <h2 style={{textAlign: "center"}}>
                La Banque Centrale Populaire met à disposition des
                individuels/entreprises un dispositif de
                financement approprié, leurs permmetant de mettre en oeuvre une
                idée d'un projet innovant.
              </h2>
            </Paragraph>
          </Content>

          <Content
            className="content3"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Paragraph>
              <h3 style={{textAlign: "center"}}>
                En postulant votre idée sur notre plateforme, elle passera par
                un processus de sélection expliqué là-dessous. Et par rapport à
                des critères choisis par un comité , vous pouvez bénéficier d'un
                financement soit totale ou partiel, vous permettant de faire
                sortir votre idée à l'existance.
              </h3>
            </Paragraph>
          </Content>

          <Content
            className="content4"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Row>
              <Col>
                <h1>Processus</h1>
              </Col>
              <Col offset={1}>
                <Steper />
              </Col>
            </Row>
          </Content>
        </Layout>

        <Footer />
      </Layout>
    );
  }

