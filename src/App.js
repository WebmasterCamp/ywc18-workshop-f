import "./App.css";
import "antd/dist/antd.css";

import NavHeader from "./components/common/NavHeader";
import WebsiteFooter from "./components/common/WebsiteFooter";
import HomePage from "./components/home/HomePage";

/** @jsxImportSource @emotion/react */
import { Layout, Button } from "antd";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginPage } from "./components/login/LoginPage";
import { RegisterPage } from "./components/login/RegisterPage";
import { ChoosePackagePage } from "./components/choose-package/ChoosePackagePage";
import { css } from "@emotion/react";

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setIsLogin(localStorage.getItem("isLogin"));
    });
  }, []);

  useEffect(() => {
    if (!isLogin) {
      history.push("/home");
    } else {
      setIsLogin(true);
    }
  }, [isLogin]);

  if (!isLogin) {
    return (
      <div>
        <Route exact path="/login">
          <LoginPage setIsLogin={setIsLogin} />
        </Route>
        <Route exact path="/register">
          <RegisterPage setIsLogin={setIsLogin} />
        </Route>
        <Route exact path="/home">
          <div className="w-full h-full relative">
            <img
              className="relative mx-auto"
              src="assets/X - 28.png"
              css={css`
                max-width: 475px !important;
              `}
            />

            <Button
              onClick={() => {
                history.push("/login");
              }}
              className="absolute w-64 h-16 bg-yellow-400 border-2 border-black rounded-lg hover:bg-yellow-600 hover:border-none"
              css={css`
                top: 380px;
                left: 100px;
              `}
            >
              สมัครเลย
            </Button>
          </div>
        </Route>
      </div>
    );
  }

  return (
    <>
      <Switch>
        <Layout className="layout">
          {location?.pathname !== "/home" && <NavHeader />}
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/create-package">
            <ChoosePackagePage />
          </Route>
          <Route exact path="/home">
            <div className="w-full h-full relative">
              <img
                className="relative mx-auto"
                src="assets/X - 28.png"
                css={css`
                  max-width: 475px !important;
                `}
              />

              <Button
                onClick={() => {
                  history.push("/");
                }}
                className="absolute w-64 h-16 bg-yellow-400 border-2 text-black border-black rounded-lg hover:bg-yellow-600 hover:border-none hover:text-black"
                css={css`
                  top: 380px;
                  left: 100px;
                `}
              >
                หน้าหลัก
              </Button>
            </div>
          </Route>
        </Layout>
      </Switch>
    </>
  );
};

export default App;
