import {Button} from "antd";
import {PAGE} from "../choose-package/ChoosePackagePage";
import React from "react";

export const SubscribePackagePage = ({ setPage }) => {
    return <div className="flex space-x-3">
        <Button
            className="w-full hover:bg-color-600 cursor-pointer text-black border-none mt-16 rounded-lg hover:bg-yellow-600"
            onClick={() => {
                setPage(PAGE.LIMITATION);
            }}
        >
            ยอดกลับ
        </Button>
        <Button
            className="w-full bg-yellow-400 hover:bg-color-600 cursor-pointer text-black border-none mt-16 rounded-lg hover:bg-yellow-600"
            onClick={() => {
                localStorage.setItem("isSubscribed", true)
                window.location.href = "/";
            }}
        >
            ต่อไป
        </Button>
    </div>
}