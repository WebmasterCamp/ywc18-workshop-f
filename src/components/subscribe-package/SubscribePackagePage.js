/** @jsxImportSource @emotion/react */
import { Button, Form, Input, Checkbox } from "antd";
import React, { useState } from "react";
import { PAGE } from "../choose-package/ChoosePackagePage";
import { css } from "@emotion/react";
import { PrimaryButton } from "../PrimaryButton";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const plainOptions = [
  "ไม่ทานเผ็ด",
  "ไม่ทานหวาน",
  "ไม่ทานเนื้อวัว",
  "ไม่ทานเนื้อหมู",
  "แพ้อาหารทะเล",
  "ทานมังสวิรัติ",
];
const defaultCheckedList = ["ข้าวผัดหมู", "ข้าวหมูทอด", "ส้มตำ", "ไก่ทอด"];
const CheckboxGroup = Checkbox.Group;

export const SubscribePackagePage = ({ setPage, setSubscribed }) => {
  const history = useHistory();
  const [foodList, setfoodList] = useState([
    "ข้าวผัดหมู",
    "ข้าวหมูทอด",
    "ส้มตำ",
    "ไก่ทอด",
  ]);
  return (
    <div className="w-full h-full text-2xl px-5 py-12">
      <div
        className="bg-gray-50 mx-auto p-5 text-yellow-400 font-bold border-black border-2 rounded-lg"
        css={css`
          height: 60% !important;
        `}
      >
        <div className="text-3xl text-black">
          แพ็กเกจ 3 วัน มีเมนูที่คุณไม่ชอบไหม เลือกออกเลย
        </div>
        <div className="text-sm text-center text-gray-400">
          FoodAroundจัดสรรเมนูพิเศษที่คุณชื่นชอบมาให้แล้ว ไม่อยากทานเมนูไหน
          เลือกออกได้เลย
        </div>

        <div className="mt-8 flex flex-col ">
          {defaultCheckedList?.map((list) => {
            const isSelected = foodList?.find((food) => food == list);

            return (
              <div
                key={list}
                className={`w-full rounded bg-opacity-40 mt-2 text-black text-sm font-normal h-10 flex items-center pl-6 ${
                  isSelected ? "bg-yellow-400" : "bg-gray-200"
                }`}
                onClick={() => {
                  const isExist = foodList?.find((l) => l == list);
                  if (isExist) {
                    const newList = foodList?.filter((l) => l !== list);
                    setfoodList(newList);
                  } else {
                    setfoodList([...foodList, list]);
                  }
                }}
              >
                {list}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex space-x-3">
        <Button
          className="w-full  cursor-pointer text-black border-none mt-16 rounded-lg h-16 flex justify-center items-center"
          onClick={() => {
            setPage(PAGE.CHOOSE_FOOD);
          }}
        >
          <LeftOutlined style={{ fontSize: "12px" }} /> ย้อนกลับ
        </Button>
        <PrimaryButton
          className="mt-16 flex justify-center items-center mr-2"
          onSubmit={() => {
            setSubscribed(true);
            history.push("/");
          }}
        >
          ต่อไป <RightOutlined style={{ fontSize: "12px" }} />
        </PrimaryButton>
      </div>
    </div>
  );
};
