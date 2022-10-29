import React, { useContext, useState } from "react";
import "./header.css";
import { Typography, Button } from "antd";
import { SketchOutlined, SettingOutlined } from "@ant-design/icons";
import Dialog from "../dialog/Dialog";
import { UserNameContext } from "../../Context/UserNameContext";
import Nav from "../nav/Nav";

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
        <Nav className="nav" />
        <div className="welcome_button">
          <h4 className="welcome_text">
            Welcome, Jimbo!
            {/* {userName.userName} */}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
