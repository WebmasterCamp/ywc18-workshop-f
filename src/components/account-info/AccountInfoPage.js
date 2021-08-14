import { Button, Form, Input } from "antd";
import React from "react";

export const AccountInfoPage = ({ setPage }) => {
    const [form] = Form.useForm()
    return <div className="w-full h-full text-2xl">
        <div className="bg-white mx-auto p-5">
            ข้อมูลบัญชีของคุณ
            <div className="mb-8 mt-8">
                <Form form={form}>
                    ชื่อ-นามสกุล
                    <Form.Item name="ืname">
                        <Input />
                    </Form.Item>
                    เบอร์โทรศัพท์
                    <Form.Item name="ืname">
                        <Input />
                    </Form.Item>
                    ที่อยู่สำหรับจัดส่งอาหาร
                    <Form.Item name="ืname">
                        <Input />
                    </Form.Item>
                    อำเภอ/เขต
                    <Form.Item name="ืname">
                        <Input />
                    </Form.Item>
                    จังหวัด
                    <Form.Item name="ืname">
                        <Input />
                    </Form.Item>
                    รหัสไปรษณีย์
                    <Form.Item name="ืname">
                        <Input />
                    </Form.Item>
                </Form>
                <Button>
                    ยอดกลับ
                </Button>
                <Button>
                    ต่อไป
                </Button>
            </div>
        </div>
    </div>
}