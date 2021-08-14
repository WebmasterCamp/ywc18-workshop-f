import {Button, Form, Input} from "antd";
import {PAGE} from "../choose-package/ChoosePackagePage";
import React, {useState} from "react";

export const MenuListPage = () => {
    const [isToday, setToday] = useState(true);

    return <div className="w-full h-full text-2xl">
        <div className="bg-white mx-auto p-5">
            <div className="text-xl">
                รายการอาหาร
            </div>
            <div className="mt-1 text-lg">
                อาหารที่คุณจะได้รับ
            </div>

            <div className="flex mt-8 space-x-3">
                <div className="text-sm">
                    <a>วันนี้</a>
                </div>
                <div className="text-sm">
                    <a>พรุ่งนี้</a>
                </div>
            </div>

            <div className="flex-col">
                <div>9.00 น.</div>
                <div className="flex spacex-9 items-center justify-between bg-grey p-1">
                    <div className="text-sm">
                        <div className="text-md">หมูปิ้ง</div>
                        <div>ร้านลุงจรูญ</div>
                        <div>ถนนรามคำแหง 150</div>
                    </div>
                    <img
                        className="rounded object-cover"
                        src={"assets/image 1.png"}
                        style={{ width: "30%", height: "auto" }}
                    />
                </div>
            </div>
        </div>
    </div>
}