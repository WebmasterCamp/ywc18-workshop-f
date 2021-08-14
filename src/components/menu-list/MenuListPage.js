import {Button, Form, Input} from "antd";
import {PAGE} from "../choose-package/ChoosePackagePage";
import React, {useState} from "react";

const items1 = [
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

const items2 = [
    {
        time: "9:00 น.",
        name: "หมูปิ้ง",
        restaurantName: "ร้านลุงจรูญ",
        location: "ถนนรามคำแหง 150"
    },
    {
        time: "12:00 น.",
        name: "ราเมงหมูชาชู",
        restaurantName: "ร้านอินเพลส สเตชัน",
        location: ""
    },
    {
        time: "18:00 น.",
        name: "ข้าวผัดกระเพราหมูกรอบ",
        restaurantName: "ร้านเฮ้งเยาวราช",
        location: ""
    }
];

export const MenuListPage = () => {
    const [isToday, setToday] = useState(true);

    return <div className="w-full h-full text-2xl">
        <div className="bg-white mx-auto p-5">
            <div className="text-5xl text-black">
                รายการอาหาร
            </div>
            <div className="mt-ๅ text-xl text-gray-400">
                อาหารที่คุณจะได้รับ
            </div>

            <div className="flex mt-8 space-x-3 mb-3">
                <div onClick={() => {
                    setToday(true)
                }
                } className={`text-sm ${isToday && "border-b-2 border-yellow-400"}`}>
                    วันนี้
                </div>
                <div onClick={() => {
                    setToday(false)
                }
                } className={`text-sm ${!isToday && "border-b-2 border-yellow-400"}`}>
                    พรุ่งนี้
                </div>
            </div>

            {isToday ? items1.map(item => {
                return <div key={item.name} className="flex-col">
                    <div className="text-base font-bold text-yellow-400">{item.time}</div>
                    <div className="flex spacex-9 items-start justify-between bg-gray-100 p-3 rounded-lg">
                        <div className="text-sm">
                            <div className="text-xl font-bold mb-1">{item.name}</div>
                            <div className="text-gray-400">{item.restaurantName}</div>
                            <div className="text-gray-400">{item.location}</div>
                        </div>
                        <img
                            className="rounded object-cover"
                            src={"assets/image 1.png"}
                            alt={item.name}
                            style={{width: "30%", height: "auto"}}
                        />
                    </div>
                </div>
            }) : items2.map(item => {
                return <div key={item.name} className="flex-col">
                    <div className="text-base font-bold text-yellow-400">{item.time}</div>
                    <div className="flex spacex-9 items-start justify-between bg-gray-100 p-3 rounded-lg">
                        <div className="text-sm">
                            <div className="text-xl font-bold mb-1">{item.name}</div>
                            <div className="text-gray-400">{item.restaurantName}</div>
                            <div className="text-gray-400">{item.location}</div>
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