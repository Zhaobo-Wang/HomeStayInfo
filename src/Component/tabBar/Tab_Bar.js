import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppOutline, UnorderedListOutline } from "antd-mobile-icons";
import { FormOutlined, HeartOutlined } from "@ant-design/icons";
import "./Tab_Bar.css";
import { TabBar } from "antd-mobile";

const Tab_Bar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/main/",
      title: "Home",
      icon: <AppOutline />,
    },
    {
      key: "/main/list",
      title: "List",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/main/star",
      title: "Collection",
      icon: <HeartOutlined />,
    },
    {
      key: "/main/form",
      title: "Form",
      icon: <FormOutlined />,
    },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} className="tab_bar_each_item"/>
      ))}
    </TabBar>
  );
};

export default Tab_Bar;
