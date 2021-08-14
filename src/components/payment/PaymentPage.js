import { Button, Form, Input } from "antd";
import React from "react";
import { PAGE } from "../choose-package/ChoosePackagePage";

export const PaymentPage = ({ setPage }) => {
    const [form] = Form.useForm()
    return <div className="w-full h-full text-2xl">
        <div className="bg-white mx-auto p-5">
            ช่องทางชำระเงิน

            <div className="mt-8 text-lg">
                ราคาทั้งหมด
            </div>
            <div className="mt-1 text-lg font-bold">
                $999 บาท
            </div>

            <div className="mt-8 text-base">
                เลือกวิธีชำระเงิน
            </div>
            <Button
                className="mr-2"
                onClick={() => {
                }}
            >
                ตัดบัญชีธนาคาร
            </Button>
            <Button
                onClick={() => {
                }}
            >
                บัตรเครดิต
            </Button>

            <div className="mb-8 mt-8 text-base">
                <Form form={form}>
                    หมายเลขบัตร
                    <Form.Item name="email">
                        <Input type="email" placeholder="Email address" />
                    </Form.Item>
                    <div className="flex space-x-3">
                        <div>
                            บัตรหมดอายุ
                            <Form.Item name="password">
                                <Input type="password" placeholder="Password" />
                            </Form.Item>
                        </div>
                        <div>
                            รหัสหลังบัตร
                            <Form.Item name="cvv">
                                <Input placeholder="cvv" />
                            </Form.Item>
                        </div>
                    </div>
                    ชื่อบนบัตร (หากไม่มี กรุณาใส่ชื่อ-นามสกุล)
                    <Form.Item name="cardHolder">
                        <Input placeholder="card holder" />
                    </Form.Item>
                </Form>
                <Button className="w-full bg-yellow-400 hover:bg-color-600 cursor-pointer text-white border-none rounded-lg hover:bg-yellow-600"
                    onClick={() => {
                        setPage(PAGE.ACCOUNT_INFO)
                    }}
                >
                    ยืนยันการชำระเงิน
                </Button>
            </div>
        </div>
    </div>
}