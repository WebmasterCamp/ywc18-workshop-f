import {Button, Form, Input} from "antd";
import {PAGE} from "../choose-package/ChoosePackagePage";
import React, {useState} from "react";

const items = [
    {
        time: "9:00 น.",
        name: "หมูปิ้ง",
        restaurantName: "ร้านลุงจรูญ",
        location: "ถนนรามคำแหง 150"
    },
    {
        time: "12:00 น.",
        name: "ข้าวยำ",
        restaurantName: "",
        location: ""
    },
    {
        time: "18:00 น.",
        name: "ข้าวผัดไก่",
        restaurantName: "",
        location: ""
    }
];

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

            <div className="flex mt-8 space-x-3 mb-3">
                <div className="text-sm">
                    <a>วันนี้</a>
                </div>
                <div className="text-sm">
                    <a>พรุ่งนี้</a>
                </div>
            </div>

            {items.map(item => {
                return <div className="flex-col">
                <div className="text-md">{item.time}</div>
                <div className="flex spacex-9 items-start justify-between bg-grey-700 p-3">
                    <div className="text-sm">
                        <div className="text-md">{item.name}</div>
                        <div>{item.restaurantName}</div>
                        <div>{item.location}</div>
                    </div>
                    <img
                        className="rounded object-cover"
                        src={"assets/image 1.png"}
                        alt={item.name}
                        style={{ width: "30%", height: "auto" }}
                    />
                </div>
            </div>
            })}
        </div>
    </div>
}