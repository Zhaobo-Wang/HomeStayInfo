import React, { Component } from "react";
import { Button, Layout, Image } from "antd";
import Portable from "./Portable";
import "./login.css";
import LoginImage from "../../img/LoginImage.webp";

export default class Login extends Component {
  state = {
    userSignUpAlready: false,
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({ userSignUpAlready: !this.state.userSignUpAlready });
  }

  render() {
    const { Sider, Content } = Layout;
    return (
      <Layout>
        <Sider className="loginSider">
          <Image src={LoginImage} className="loginImage slide-left" />
        </Sider>
        <Layout>
          <Content className="loginContent">
            <div className="loginForm slide-bottom">
              <Portable userSignUpAlready={this.state.userSignUpAlready} />
              <Button
                type="text"
                className="loginTextButton"
                onClick={(e) => {
                  this.handleClick(e);
                }}
              >
                {this.state.userSignUpAlready
                  ? "New user for register"
                  : "Already sign up, Login directly"}
              </Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
