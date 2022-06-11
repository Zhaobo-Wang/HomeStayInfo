import React, { useContext, useState } from "react";
import "./header.css";
import { Typography, Button } from "antd";
import { SketchOutlined, SettingOutlined } from "@ant-design/icons";
import Dialog from "../dialog/Dialog";
import { UserNameContext } from "../../Context/UserNameContext";

const Header = () => {
  const { Title } = Typography;
  const [openModal, setOpenModal] = useState(false);
  const { userName, setUserName } = useContext(UserNameContext);

  function openDialog(e) {
    e.preventDefault();
    setOpenModal(true);
    console.log(e);
  }

  console.log(userName);

  return (
    <div className="Header">
      <div className="header_title-box">
        <Title style={{ color: "white" }} level={2} className="header_title">
          <SketchOutlined />
          HOME_STAY Info
        </Title>
      </div>
      <div className="welcome_button">
        <Button type="text" size="large">
          Welcome, {userName.userName}
        </Button>
      </div>
      <div className="login_button">
        <Button
          type="text"
          size="large"
          onClick={(e) => {
            openDialog(e);
          }}
        >
          Setting
        </Button>
      </div>
      <div className="login_icon">
        <Button
          type="text"
          size="large"
          onClick={(e) => {
            openDialog(e);
          }}
        >
          <SettingOutlined />
        </Button>
      </div>
      <Dialog openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Header;
