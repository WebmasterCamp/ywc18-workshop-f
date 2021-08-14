import React, { useState } from "react";

import { Button, Form, Input } from "antd";
import { ChoosePackage } from './ChoosePackage'
import { PaymentPage } from "../payment/PaymentPage";
import { AccountInfoPage } from "../account-info/AccountInfoPage";
import {LimitationPage} from "../limitation/LimitationPage";

export const PAGE = {
    CHOOSE_PACKAGE: 'choose-package-page',
    PAYMENT: 'payment',
    ACCOUNT_INFO: 'account-info',
    LIMITATION: 'limitation',
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
        case PAGE.LIMITATION: {
            return <LimitationPage setPage={setPage}/>
        }

        default: { return <></> }
    }
}

