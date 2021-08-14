import React, { useState } from "react";

import { Button, Form, Input } from "antd";
import { ChoosePackage } from './ChoosePackage'
export const PAGE = {
    CHOOSE_PACKAGE: 'choose-package-page',
    PAYMENT: 'payment',


};

export const ChoosePackagePage = () => {
    const [form] = Form.useForm()
    const [page, setPage] = useState(PAGE.CHOOSE_PACKAGE)
    console.log("hi");


    switch (page) {
        case PAGE.CHOOSE_PACKAGE: {
            return <ChoosePackage setPage={setPage} />;
        }
        default: { return <></> }
    }
}

