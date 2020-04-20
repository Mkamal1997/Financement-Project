import React from "react";
import { Form, Input, Row, Col, Button, AutoComplete } from "antd";
import { Link } from "react-router-dom";

const { TextArea } = Input;
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

const Phase2 = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{
          prefix: "212",
        }}
        scrollToFirstError
      >
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
      </Form>
      <br /> <br />
    </div>
  );
};

export default Phase2;
