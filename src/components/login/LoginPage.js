import React from "react";
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";

export const LoginPage = ({ setIsLogin }) => {
    const [form] = Form.useForm()
    const history = useHistory();

    return (
        <div className="w-full h-full text-2xl">
            <div className="bg-white mx-auto p-5 text-yellow-400 font-bold">
                Login
                <div className="mb-8 mt-8">
                    <Form form={form}>
                        <Form.Item name="email">
                            <Input type="email" placeholder="Email address" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                    </Form>
                    <div className="text-blue-500 text-xs mb-4 cursor-pointer hover:text-color-700" onClick={() => {
                        history.push("/register")
                    }}>Register?</div>
                    <Button className="w-full bg-yellow-400 hover:bg-color-600 cursor-pointer text-white border-none"
                        onClick={() => {
                            setIsLogin(true);
                            localStorage.setItem("isLogin", true);
                            history.push("/");
                        }}
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};
