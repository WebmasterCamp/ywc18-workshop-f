import "./App.css";
import "antd/dist/antd.css";

import NavHeader from "./components/common/NavHeader";
import WebsiteFooter from "./components/common/WebsiteFooter";
import HomePage from "./components/home/HomePage";

import {Layout} from "antd";
import {Switch, Route, useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import {LoginPage} from "./components/login/LoginPage";
import {RegisterPage} from "./components/login/RegisterPage";
import {ChoosePackagePage} from "./components/choose-package/ChoosePackagePage";

const App = () => {
    const history = useHistory();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        window.addEventListener('storage', () => {
            setIsLogin(localStorage.getItem("isLogin"));
        });
    }, []);

    useEffect(() => {
        if (!isLogin) {
            history.push("/login");
        } else {
            setIsLogin(true);
        }
    }, [isLogin])

    if (!isLogin) {
        return (
            <>
                <Route exact path="/login">
                    <LoginPage setIsLogin={setIsLogin}/>
                </Route>
                <Route exact path="/register">
                    <RegisterPage setIsLogin={setIsLogin}/>
                </Route>
            </>
        );
    }

    return (
        <>
            <Switch>
                <Layout className="layout">
                    <NavHeader/>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/create-package">
                        <ChoosePackagePage/>
                    </Route>
                    <WebsiteFooter/>
                </Layout>
            </Switch>
        </>
    );
};

export default App;
