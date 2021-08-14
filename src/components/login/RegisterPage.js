import { Form, Input, Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const RegisterPage = ({ setIsLogin }) => {
    const history = useHistory()

    const [form] = Form.useForm()
    return (
        <div className="w-full h-full text-2xl">
            <div className="bg-white mx-auto p-5 text-yellow-400 font-bold">
                Register
                <div className="mb-8 mt-8">
                    <Form form={form}>
                        <Form.Item name="email">
                            <Input type="email" placeholder="Email address" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                    </Form>
                    <Button className="w-full bg-yellow-400 hover:bg-color-600 cursor-pointer text-white border-none"
                        onClick={() => {
                            setIsLogin(true);
                            localStorage.setItem("isLogin", true);
                            history.push("/");
                        }}
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    )
}
