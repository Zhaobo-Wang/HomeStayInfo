import React from "react";
import "./Tenant_form.css";
import { Form, Input, Button, Checkbox } from "antd";

const Tenant_form = () => {
  const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 },
  };
  return (
    <Form
      {...layout}
      className="form"
    >
      <Form.Item
        label="Tenant Name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input className="host-form-input" />
      </Form.Item>
      <Form.Item
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please input your gender!",
          },
        ]}
      >
        <Input className="host-form-input" />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input className="host-form-input" />
      </Form.Item>
      <Form.Item
        label="Email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input className="host-form-input" />
      </Form.Item>
      <div class="bot-box">
        <Form.Item>
          <Checkbox>Home_Stay</Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox>Rent</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{ borderRadius: "5rem" }}>Sumbit</Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Tenant_form;
