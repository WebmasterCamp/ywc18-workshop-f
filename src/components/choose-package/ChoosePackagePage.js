import React, {useState} from "react";

import {Button, Form, Input} from "antd";

const PAGE = {
    CHOOSE_PACKAGE: 'choosepackagepage',
};

export const ChoosePackagePage = () => {
    const [form] = Form.useForm()
    const [page, setPage] = useState(PAGE.CHOOSE_PACKAGE)

    switch (page) {
        case PAGE.CHOOSE_PACKAGE: {
            return <div className="w-full h-full text-2xl">
                <div className="bg-white mx-auto p-5">
                    Choose package
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

                            }}
                        >
                            next
                        </Button>
                    </div>
                </div>
            </div>
        }
    }
};
