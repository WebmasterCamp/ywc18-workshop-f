import "./App.css";
import "antd/dist/antd.css";

import NavHeader from "./components/common/NavHeader";
import WebsiteFooter from "./components/common/WebsiteFooter";
import HomePage from "./components/home/HomePage";

/** @jsxImportSource @emotion/react */
import { Layout, Button } from "antd";
import {
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginPage } from "./components/login/LoginPage";
import { RegisterPage } from "./components/login/RegisterPage";
import { ChoosePackagePage } from "./components/choose-package/ChoosePackagePage";
import { css } from "@emotion/react";
import {MerchantOrderPage} from "./components/merchant/MerchantOrderPage";
import {ContactMerchantPage} from "./components/merchant/ContactMerchantPage";

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [user, setuser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      history.push("/home");
    } else {
      setIsLogin(true);
      setuser(user);
    }
  }, [localStorage.getItem("user")]);

  useEffect(() => {
    const isSubscribed = localStorage.getItem("isSubscribed");
    if (!isSubscribed) {
      setSubscribed(false);
    } else {
      setSubscribed(true);
    }
  }, [localStorage.getItem("isSubscribed")]);

  if (!isLogin) {
    return (
      <Switch>
        <Route exact path="/login">
          <LoginPage
            setIsLogin={setIsLogin}
            subscribed={subscribed}
            user={user}
            setuser={setuser}
          />
        </Route>
        <Route exact path="/register">
          <RegisterPage setIsLogin={setIsLogin} />
        </Route>
        <Route exact path="/home">
          <div className="w-full h-full relative">
            <img
              className="relative mx-auto"
              src="assets/X - 29.png"
              css={css`
                max-width: 475px !important;
              `}
            />

            <Button
              onClick={() => {
                history.push("/login");
              }}
              className="absolute text-2xl w-64 h-16 bg-yellow-400 border-2 border-black rounded-lg hover:bg-yellow-600 hover:border-none"
              css={css`
                top: 380px;
                @media only screen and (max-width: 375px) {
                  left: 70px;
                }
                left: 100px;
              `}
            >
              สมัครเลย
            </Button>
          </div>
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <>
      <Switch>
        <Layout className="layout">
          {location?.pathname !== "/home" && (
            <NavHeader setIsLogin={setIsLogin} />
          )}
          <Route exact path="/">
            <HomePage subscribed={subscribed} setSubscribed={setSubscribed} />
          </Route>
          <Route exact path="/merchant">
            {/*<div className="flex justify-center items-center w-full h-screen text-2xl">*/}
            {/*  Coming Soon ...*/}
            {/*</div>*/}
            {/*<MerchantOrderPage/>*/}
            <ContactMerchantPage/>
          </Route>
          <Route exact path="/create-package">
            <ChoosePackagePage setSubscribed={setSubscribed} />
          </Route>
          <Route exact path="/home">
            <div className="w-full h-full relative">
              <img
                className="relative mx-auto"
                src="assets/X - 29.png"
                css={css`
                  max-width: 475px !important;
                `}
              />

              <Button
                onClick={() => {
                  history.push("/");
                }}
                className="absolute text-2xl w-64 h-16 bg-yellow-400 border-2 text-black border-black rounded-lg hover:bg-yellow-600 hover:border-none hover:text-black"
                css={css`
                  top: 380px;
                  @media only screen and (max-width: 375px) {
                    left: 70px;
                  }
                  left: 100px;
                `}
              >
                หน้าหลัก
              </Button>
            </div>
          </Route>
        </Layout>
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

export default App;
