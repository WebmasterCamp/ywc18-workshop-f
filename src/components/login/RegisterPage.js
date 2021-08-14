import { Form, Input } from 'antd'
import React from 'react'

export const RegisterPage = () => {

    const [form] = Form.useForm()
    return (
        <div className="w-full h-full p-5">
            <Form form={form} >
                <div>Email</div>
                <Form.Item name="email"><Input /></Form.Item>
            </Form>


        </div >
    )
}
