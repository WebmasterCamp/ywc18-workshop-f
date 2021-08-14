/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { PAGE } from "./ChoosePackagePage";
import { Button, Form, Input } from "antd";
import { css } from "@emotion/react";
import { PrimaryButton } from "../PrimaryButton";

const PACKAGE = {
  THREE: "three",
  MONTH: "month",
};


export const ChoosePackage = ({ setPage }) => {

  const [selectedPackage, setSelectedPackage] = useState(PACKAGE.THREE);

  return (
    <div className="w-full h-full text-2xl px-5 py-12">
      <div
        className="bg-gray-50 mx-auto p-5 text-yellow-400 font-bold border-black border-2 rounded-lg"
        css={css`
          height: 80% !important;
        `}
      >
        <div className="text-5xl text-black">เลือกแพ็กเกจที่คุณสนใจ</div>
        <div className="mb-8 mt-8">
          <div
            onClick={() => {
              setSelectedPackage(PACKAGE.THREE);
            }}
            className={`p-8 border-2 border-black text-sm rounded-2xl cursor-pointer mb-8 text-black ${
              selectedPackage === PACKAGE.THREE
                ? "bg-yellow-400 border-yellow-400 bg-opacity-40"
                : "bg-transparent"
            }`}
          >
            <div className="font-bold text-xl mb-4">3 วัน 999บาท</div>
            <div className="text-gray-600">
              มื้ออาหารสุดพิเศษของคุณมาพร้อมกับเมนูที่คุณเลือกสรรไว้ทั้ง 9
              รสชาติ ไม่ต้องกังวลเรื่องมื้ออาหารในแต่ละวัน ให้ FoodAround
              ดูแลเรื่องอาหารให้คุณ
            </div>
          </div>
          <div
            onClick={() => {
              setSelectedPackage(PACKAGE.MONTH);
            }}
            className={`p-8 border-2 border-black text-sm rounded-2xl text-black ${
              selectedPackage === PACKAGE.MONTH
                ? "bg-yellow-400 border-yellow-400 bg-opacity-40"
                : "bg-transparent"
            }`}
          >
            <div className="font-bold text-xl mb-4">7 วัน 1,499บาท</div>
            <div className="text-gray-600">
              เรารู้ว่าคุณทำงานหนักขึ้นในช่วงนี้ ให้เราช่วยดูแลมื้ออาหารให้คุณ
              21 เมนูที่คุณเลือกได้ ไม่ต้องกังวลเรื่องความจำเจ ให้ให้ FoodAround
              ดูแลเรื่องอาหารให้คุณ
            </div>
          </div>
        </div>
        <div className="text-sm"></div>
      </div>
      <PrimaryButton
        className="mt-8"
        onSubmit={() => {
          setPage(PAGE.PAYMENT);
        }}
      >
        ต่อไป
      </PrimaryButton>
    </div>
  );
};
