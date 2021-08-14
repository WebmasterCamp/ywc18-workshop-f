import React, { useState } from "react";

import { Button, Form, Input } from "antd";
import { ChoosePackage } from './ChoosePackage'
export const PAGE = {
    CHOOSE_PACKAGE: 'choose-package-page',
    PAYMENT: 'payment',


}



export const ChoosePackagePage = () => {
    const [form] = Form.useForm()
    const [page, setPage] = useState(PAGE.CHOOSE_PACKAGE)
    console.log("hi");


    switch (page) {
        case PAGE.CHOOSE_PACKAGE: {
            return <ChoosePackage setPage={setPage} />;
        }
        case PAGE.PAYMENT: {
            return <div className="w-full h-full text-2xl">
                <div className="bg-white mx-auto p-5">
                    Payment

                    <div className="mt-8 text-base">
                        total price
                    </div>
                    <div className="mt-1 text-base">
                        $999
                    </div>

                    <div className="mt-8 text-base">
                        choose payment method
                    </div>
                    <Button
                        className="mr-2"
                        onClick={() => {
                        }}
                    >
                        ตัดบัญชี
                    </Button>
                    <Button
                        onClick={() => {
                        }}
                    >
                        credit card
                    </Button>

                    <div className="mb-8 mt-8">
                        <Form form={form}>
                            card no
                            <Form.Item name="email">
                                <Input type="email" placeholder="Email address" />
                            </Form.Item>
                            <div className="flex space-x-3">
                                <div>
                                    valid until
                                    <Form.Item name="password">
                                        <Input type="password" placeholder="Password" />
                                    </Form.Item>
                                </div>
                                <div>
                                    cvv
                                    <Form.Item name="cvv">
                                        <Input placeholder="cvv" />
                                    </Form.Item>
                                </div>
                            </div>
                            card holder
                            <Form.Item name="cardHolder">
                                <Input placeholder="card holder" />
                            </Form.Item>
                        </Form>
                        <Button
                            onClick={() => {
                                setPage(PAGE.ACCOUNT_INFO)
                            }}
                        >
                            pay
                        </Button>
                    </div>
                </div>
            </div>
        }
        case PAGE.ACCOUNT_INFO: {
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
        default: { return <></> }
    }
}

