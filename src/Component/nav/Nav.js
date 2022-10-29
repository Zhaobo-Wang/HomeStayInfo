import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  FormOutlined,
  ReadOutlined,
  HeartOutlined,
  BookOutlined,
  PlusOutlined
} from "@ant-design/icons";

const Nav = () => {
  return (
    <div>
      <Menu className="nav" mode="horizontal">
        <Menu.Item className="navItem" icon={<HomeOutlined />}>
          <Link to="/main/" className="navText">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item className="navItem" icon={<ReadOutlined />}>
          <Link to="/main/about" className="navText">
            About
          </Link>
        </Menu.Item>
        <Menu.Item className="navItem" icon={<BookOutlined />}>
          <Link to="/main/list" className="navText">
            HomeStay
          </Link>
        </Menu.Item>
        <Menu.Item className="navItem" icon={<HeartOutlined />}>
          <Link to="/main/star" className="navText">
            Favorite
          </Link>
        </Menu.Item>
        <Menu.Item className="navItem" icon={<PlusOutlined />}>
          <Link to="/main/form" className="navText">
            Post
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
