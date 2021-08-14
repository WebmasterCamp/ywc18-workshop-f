import {Button, Form, Input} from "antd";
import {PAGE} from "../choose-package/ChoosePackagePage";
import React, {useState} from "react";

const contact1 = [
    {
        time: "9:00 น.",
        name: "ไรเดอร์สมหญิง",
        contact: "089-123-4567",
        detail: "หมูปิ้ง 100 ไม้ 9.00 น."
    },
    {
        time: "12:00 น.",
        name: "ไรเดอร์สมหญิง",
        contact: "089-123-4567",
        detail: "หมูปิ้ง 100 ไม้ 9.00 น."
    },
    {
        time: "18:00 น.",
        name: "ไรเดอร์สมหญิง",
        contact: "089-123-4567",
        detail: "หมูปิ้ง 100 ไม้ 9.00 น."
    },
];

const contact2 = [
    {
        time: "18:00 น.",
        name: "ต้มยำ",
        amount: "200 ไม้"
    },
    {
        time: "11:00 น.",
        name: "ต้มยำ",
        amount: "200 ไม้"
    },
    {
        time: "12:00 น.",
        name: "ต้มยำ",
        amount: "200 ไม้"
    },
];

export const ContactMerchantPage = () => {
    const [isToday, setToday] = useState(true);

    return <div className="w-full h-full text-2xl">
        <div className="bg-white mx-auto p-5">
            <div className="text-5xl text-black">
                ติดต่อไรเดอร์
            </div>

            <div className="flex mt-8 space-x-3 mb-3">
                <div onClick={() => {
                    setToday(true)
                }
                } className={`text-lg ${isToday && "border-b-2 border-yellow-400"}`}>
                    วันนี้
                </div>
                <div onClick={() => {
                    setToday(false)
                }
                } className={`text-lg ${!isToday && "border-b-2 border-yellow-400"}`}>
                    พรุ่งนี้
                </div>
            </div>

            {isToday ? contact1.map(item => {
                return <div key={item.name} className="flex-col mb-2">
                    <div className="text-lg text-black">{item.time}</div>
                    <div className="flex spacex-9 items-center justify-between bg-gray-100 p-4 rounded-lg">
                        <div className="text-lg">
                            <div className="text-xl mb-1">{item.name}</div>
                            <div className="text-xl mb-1">{item.contact}</div>
                            <div className="text-xl">{item.detail}</div>
                        </div>
                        <img
                            className="rounded object-cover"
                            src={"assets/image 1.png"}
                            alt={item.name}
                            style={{width: "30%", height: "auto"}}
                        />
                    </div>
                </div>
            }) : contact2.map(item => {
                return <div key={item.name} className="flex-col mb-2">
                    <div className="text-lg text-black">{item.time}</div>
                    <div className="flex spacex-9 items-center justify-between bg-gray-100 p-4 rounded-lg">
                        <div className="text-lg">
                            <div className="text-xl mb-1">{item.name}</div>
                            <div className="text-xl mb-1">{item.contact}</div>
                            <div className="text-xl">{item.detail}</div>
                        </div>
                        <img
                            className="rounded object-cover"
                            src={"assets/image 1.png"}
                            alt={item.name}
                            style={{width: "30%", height: "auto"}}
                        />
                    </div>
                </div>
            })}
        </div>
    </div>
}