import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

export const LoginPage = ({ setIsLogin }) => {
  const history = useHistory();
  return (
    <div className="w-full h-full">
      <div className="bg-white mx-auto">
        <Button
          onClick={() => {
            setIsLogin(true);
            localStorage.setItem("isLogin", true);
            history.push("/");
          }}
        >
          login
        </Button>
      </div>
    </div>
  );
};
