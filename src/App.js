import Login from "./Page/login/Login";
import Home from "./Page/home/Home";
import About from "./Page/about/About";
import Form from "./Page/form/Form_data";
import List from "./Page/list/List";
import Star from "./Page/list/Star";
import HeadSection from "./Component/header/Header";
import FootSection from "./Component/footer/Footer";
import Nav from "./Component/nav/Nav";
import "./app.css";
import "antd/dist/antd.min.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import React, { useState } from "react";
import { AuthContext } from "./Context/AuthContext";
import { UserNameContext } from "./Context/UserNameContext";

const App = () => {
  const [authentication, setAuthentication] = useState(false);
  const [userName, setUserName] = useState("");

  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Routes>
      {authentication ? (
        <Route
          path="*"
          element={
            <Layout>
              <div className="app">
                <Header className="MainHead">
                  <UserNameContext.Provider value={{ userName, setUserName }}>
                    <HeadSection />
                  </UserNameContext.Provider>
                </Header>
                <Layout>
                  <Sider className="MainSider">
                    <Nav />
                  </Sider>
                  <Content className="MainContent">
                    <Routes>
                      <Route path="/main/" element={<Home />} />
                      <Route path="/main/about" element={<About />} />
                      <Route path="/main/form" element={<Form />} />
                      <Route path="/main/list" element={<List />} />
                      <Route path="/main/star" element={<Star />} />
                    </Routes>
                  </Content>
                </Layout>
                <Footer className="MainFooter">
                  <FootSection />
                </Footer>
              </div>
            </Layout>
          }
        />
      ) : (
        // <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <AuthContext.Provider value={{ authentication, setAuthentication }}>
              <UserNameContext.Provider value={{ userName, setUserName }}>
                <Login to="/login" replace />
              </UserNameContext.Provider>
            </AuthContext.Provider>
          }
        />
      )}
    </Routes>
  );
};

export default App;
