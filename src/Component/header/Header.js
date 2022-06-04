import React, { useContext, useState } from "react";
import "./header.css";
import { Typography, Button } from "antd";
import { SketchOutlined } from "@ant-design/icons";
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
      <Title style={{ color: "white" }} level={2}>
        <SketchOutlined />
        HOME_STAY Info
        <Button 
          type="text" 
          size="large" 
          className="login_button"
        >
          Welcome, {userName.userName}
        </Button>
        <Button
          type="text"
          size="large"
          className="login_button"
          onClick={(e) => {
            openDialog(e);
          }}
        >
          Setting
        </Button>
        <Dialog openModal={openModal} setOpenModal={setOpenModal} />
      </Title>
    </div>
  );
};

export default Header;
