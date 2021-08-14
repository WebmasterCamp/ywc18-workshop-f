import React, { useState } from "react";
import { PAGE } from "./ChoosePackagePage";
import { Button, Form, Input } from "antd";


const PACKAGE = {
    THREE: "three",
    MONTH: "month",
};
export const ChoosePackage = ({ setPage }) => {
    const [selectedPackage, setSelectedPackage] = useState(PACKAGE.THREE);


    return (
        <div className="w-full h-full text-2xl">
            <div className="bg-white mx-auto p-5">
                เลือกแพ็กเกจที่คุณสนใจ
                <div className="mb-8 mt-8">
                    <div onClick={() => {
                        setSelectedPackage(PACKAGE.THREE)
                    }} className={`p-8 border-2 border-black text-sm rounded-2xl cursor-pointer mb-8 ${selectedPackage === PACKAGE.THREE ? 'bg-yellow-400 border-yellow-400' : "bg-transparent"}`}>
                        <div>3 วัน</div>
                        <div>
                            มื้ออาหารสุดพิเศษของคุณมาพร้อมกับเมนูที่คุณเลือกสรรไว้ทั้ง 9 รสชาติ ไม่ต้องกังวลเรื่องมื้ออาหารในแต่ละวัน ให้ FoodAround ดูแลเรื่องอาหารให้คุณ
                        </div>
                    </div>
                    <div onClick={() => {
                        setSelectedPackage(PACKAGE.MONTH)
                    }} className={`p-8 border-2 border-black text-sm rounded-2xl ${selectedPackage === PACKAGE.MONTH ? 'bg-yellow-400 border-yellow-400' : "bg-transparent"}`}>
                        <div>7 วัน </div>
                        <div>
                            เรารู้ว่าคุณทำงานหนักขึ้นในช่วงนี้ ให้เราช่วยดูแลมื้ออาหารให้คุณ 21 เมนูที่คุณเลือกได้ ไม่ต้องกังวลเรื่องความจำเจ ให้ให้ FoodAround ดูแลเรื่องอาหารให้คุณ

                        </div>
                    </div>
                </div>


                <div className="text-sm">ราคาทั้งหมด {selectedPackage === PACKAGE.THREE ? '999' : '1,999'} บาท</div>

                <Button className="w-full bg-yellow-400 hover:bg-color-600 cursor-pointer text-white border-none mt-16 rounded-lg hover:bg-yellow-600"
                    onClick={() => {
                        setPage(PAGE.PAYMENT)

                    }}
                >
                    ชำระเงิน
                </Button>
            </div>
        </div>
    );
};
