import React, { useState } from "react";

import { Button, Form, Input } from "antd";
import { ChoosePackage } from './ChoosePackage'
import { PaymentPage } from "../payment/PaymentPage";
import { AccountInfoPage } from "../account-info/AccountInfoPage";

export const PAGE = {
    CHOOSE_PACKAGE: 'choose-package-page',
    PAYMENT: 'payment',
    ACCOUNT_INFO: 'account-info',
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
            return <PaymentPage setPage={setPage} />;
        }
        case PAGE.ACCOUNT_INFO: {
            return <AccountInfoPage setPage={setPage} />
        }
        default: { return <></> }
    }
}

