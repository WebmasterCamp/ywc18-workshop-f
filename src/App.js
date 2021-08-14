import "./App.css";
import "antd/dist/antd.css";

import NavHeader from "./components/common/NavHeader";
import WebsiteFooter from "./components/common/WebsiteFooter";
import HomePage from "./components/home/HomePage";

import { Layout } from "antd";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginPage } from "./components/login/LoginPage";
import { RegisterPage } from "./components/login/RegisterPage";

const App = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      history.push("/login");
    } else {
      setIsLogin(true);
    }
  }, []);

  if (!isLogin) {
    return (
      <>
        <Route exact path="/login">
          <LoginPage setIsLogin={setIsLogin} />
        </Route>
        <Route exact path="/register">
          <RegisterPage setIsLogin={setIsLogin} />
        </Route>
      </>
    );
  }

  return (
    <>
      <Switch>
        <Layout className="layout">
          <NavHeader />
          <Route path="/"></Route>
          <Route exact path="/app">
            <HomePage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/list">
            <HomePage />
          </Route>
          <Route exact path="/app">
            <HomePage />
          </Route>
          <WebsiteFooter />
        </Layout>
      </Switch>
    </>
  );
};

export default App;
