import React from "react";
import { Form, Col, Checkbox } from "antd";

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

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}
const Phase1 = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <Form {...formItemLayout} form={form} name="register">
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 24, offset: 10 }}>
          Phase 1 : Choisir un domaine
        </Col>
        <br /> <br />
        <Form.Item label="Domaine fonctionnel">
          <Checkbox.Group options={plainOptions} onChange={onChange} />
        </Form.Item>
      </Form>
      <br /> <br />
    </div>
  );
};

export default Phase1;
