import React, { useState } from "react";
import Footer from "./Footer";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Layout,
  DatePicker,
} from "antd";

import { QuestionCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { Link } from "react-router-dom";

const { Content, Sider, Header } = Layout;
const { Option } = Select;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
  },
];
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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Formulaire = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+212</Option>
        <Option value="87">+32</Option>
        <Option value="87">+33</Option>
        <Option value="87">+34</Option>
        <Option value="87">+35</Option>
      </Select>
    </Form.Item>
  );
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
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

  return (
    <div>
      <Layout>
        <Header></Header>
        <Layout>
          <Content>
            <br />
            <Row>
              <Col>
                {" "}
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>DEPOSER MA DEMANDE</BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 0 : Informations sur le porteur de projet
              </Col>
            </Row>
            <br /> <br />
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: "212",
              }}
              scrollToFirstError
            >
              <Row>
                <Col span={10} offset={3}>
                  <Form.Item
                    name="nom"
                    label="nom"
                    rules={[
                      {
                        required: true,
                        message: "Entrer SVP votre nom!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="Date de naissance"
                    label="Date de naissance"
                    rules={[
                      {
                        required: true,
                        message: "Entrer SVP votre Date de naissance",
                      },
                    ]}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    name="CIN"
                    label=" N° CIN"
                    rules={[
                      {
                        required: true,
                        message: "Entrer SVP votre CIN!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Téléphone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input
                      addonBefore={prefixSelector}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                  <Form.Item label="Formation">
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={10}>
                  <Form.Item
                    name="prénom"
                    label="prénom"
                    rules={[
                      {
                        required: true,
                        message: "Entrer SVP votre prénom!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="Lieu de naissance"
                    label="Lieu de naissance"
                    rules={[
                      {
                        required: true,
                        message: "Entrer SVP votre Lieu de naissance",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="situation"
                    label="Situation familiale"
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="Choisir une option" allowClear>
                      <option value="Célibataire"></option>
                      <option value="Marié(e)"></option>
                      <option value="veuf(e)"></option>
                      <option value="Divorcé(e)"></option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email adress!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Diplôme">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Col span={24}>
                <Form.Item label="Motivation">
                  <TextArea
                    rows={3}
                    placeholder="écrire votre motivation pour ce projet"
                  />
                </Form.Item>
              </Col>
              <br /> <br />
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 1 : Choisir un domaine
              </Col>
              <br /> <br />
              <Form.Item label="Domaine fonctionnel">
                <Checkbox.Group options={plainOptions} onChange={onChange} />
              </Form.Item>
              <br /> <br />
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 2 : Informations sur le projet
              </Col>
              <br /> <br />
              <Form.Item label="Description du projet">
                <TextArea
                  rows={5}
                  placeholder="Décriver votre projet / Produit(service) / marché cible"
                />
              </Form.Item>
              <br /> <br /> <br />
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 3 : Tri de la demande ( veuiller patienter ) <br/>
                étude d'éligibilité du porteur de projet / de projet
              </Col>
              <br /> <br /> <br /> <br /> <br /> <br />


              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 4 : Donner plus de details sur votre projet
              </Col> <br /> <br /> <br />
              <Form.Item label="Lieu d'implantation du projet">
                <Input />
              </Form.Item>
              <Form.Item label="Estimation du coût global du projet">
                <Input placeholder="$$" />
              </Form.Item>
              <Form.Item label="Apport personnel">
                <Input placeholder="$$" />
              </Form.Item>
              <Form.Item label="Financement sollicité ">
                <Input placeholder="$$" />
              </Form.Item>
              <br /> <br /> <br /> <br /> <br /> <br />


              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
                Phase 5 : Veuiller attendre la décision finale du Financement
              </Col> <br /> <br /> <br />
            </Form>
          </Content>
          <Sider></Sider>
        </Layout>
        <div>
          <Footer />
        </div>
      </Layout>
    </div>
  );
};

export default Formulaire;
