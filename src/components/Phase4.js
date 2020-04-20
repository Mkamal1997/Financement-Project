import React from "react";
import { Form, Col, Input } from "antd";

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
const Phase4 = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
        Phase 4 : Donner plus de details sur votre projet
      </Col>{" "}
      <br /> <br /> <br />
      <Form {...formItemLayout} form={form} name="register" scrollToFirstError>
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
      </Form>
    </div>
  );
};
export default Phase4;
