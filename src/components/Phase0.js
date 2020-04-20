import React, { Component } from "react";
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  AutoComplete,
  DatePicker,
  Button,
} from "antd";

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

export default class Phase0 extends Component {
  /* 
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({
      isFinished: true,
    });
    this.props.handleClickInParent(true);
    event.preventDefault();
  }
  */
  render() {
    /* document.getElementById("myForm").onsubmit = function () {
      this.handleClick();
    };*/
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
    return (
      <div>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
            Phase 0 : Informations sur le porteur de projet
          </Col>
        </Row>
        <br /> <br />
        <Form
          onSubmit={this.handleSubmit}
          {...formItemLayout}
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
          <Col offset={12}>
            <Form.Item>
              <Button
                onclick="handleSubmit()"
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Valider
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
    );
  }
}

/* onclick="handleSubmit()" */
