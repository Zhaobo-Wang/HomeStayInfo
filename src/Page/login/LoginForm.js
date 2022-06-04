import React, { Component } from "react";

import { Form, Input, Typography, Button, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";

export default class LoginForm extends Component {
  state = {
    Email: null,
    Password: null,
    Loading: false,
  };

  async handleClick(e) {
    e.preventDefault();
    console.log(this.state);
    try {
      await axios.post("http://localhost:5000/api/v1/user/login", {
        UserName: this.props.userName.userName,
        Email: this.state.Email,
        Password: this.state.Password,
      });
      message.success(`Welcome back to HomeStay`);
      this.props.setAuthentication({ authentication: true });
    } catch (error) {
      // message.error(error.response.data.msg.split(",")[0]);
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Typography.Title
          level={3}
          style={{ marginBottom: "1rem" }}
          className="loginTitle"
        >
          HomeStay Info
        </Typography.Title>
        <h4 className="loginSubTitle">Welcome Back</h4>
        <Form title="Login">
        <Form.Item name="Email">
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              className="loginInput"
              onChange={(e) => {
                this.setState({ Email: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item name="Password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="loginInput"
              onChange={(e) => {
                this.setState({ Password: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="login-btn"
              type="text"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Log In &#8594;
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
