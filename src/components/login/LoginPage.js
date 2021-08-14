import React from "react";
import {Button, Form, Input} from "antd";
import {useHistory} from "react-router-dom";

export const LoginPage = ({setIsLogin}) => {
    const [form] = Form.useForm()
    const history = useHistory();

    return (
        <div className="w-full h-full text-2xl">
            <div className="bg-white mx-auto p-5">
                Login
                <div className="mb-8 mt-8">
                    <Form form={form}>
                        <Form.Item name="email">
                            <Input type="email" placeholder="Email address"/>
                        </Form.Item>
                        <Form.Item name="password">
                            <Input type="password" placeholder="Password"/>
                        </Form.Item>
                    </Form>
                    <Button
                        onClick={() => {
                            setIsLogin(true);
                            localStorage.setItem("isLogin", true);
                            history.push("/");
                        }}
                    >
                        next
                    </Button>
                </div>
            </div>
        </div>
    );
};
