import React, { Component } from "react";
import { Form, Input, Typography, Button, message } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";

export default class SignupForm extends Component {
  state = {
    Email: null,
    Password: null,
    Loading: false,
  };

  async handleClick(e) {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props.userName.userName);
    try {
      await axios.post("http://localhost:5000/api/v1/user/register", {
        UserName: this.props.userName.userName,
        Email: this.state.Email,
        Password: this.state.Password,
      });
      message.success(`Welcome to HomeStay, ${this.props.userName.userName}`);
      this.props.setAuthentication({ authentication: true });
    } catch (error) {
      message.error(error.response.data.msg.split(",")[0]);
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
        <h4 className="loginSubTitle">Enjoy Your Journey</h4>
        <Form title="Sign Up">
          <Form.Item name="UserName">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              className="loginInput"
              onChange={(e) => {
                this.props.setUserName({ userName: e.target.value });
              }}
            />
          </Form.Item>
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
              type="text"
              className="login-btn"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Sign Up &#8594;
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

