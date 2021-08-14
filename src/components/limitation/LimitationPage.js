/** @jsxImportSource @emotion/react */
import { Button, Form, Input, Checkbox } from "antd";
import React, { useState } from "react";
import { PAGE } from "../choose-package/ChoosePackagePage";
import { css } from "@emotion/react";
import { PrimaryButton } from "../PrimaryButton";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const plainOptions = [
  "ไม่ทานเผ็ด",
  "ไม่ทานหวาน",
  "ไม่ทานเนื้อวัว",
  "ไม่ทานเนื้อหมู",
  "แพ้อาหารทะเล",
  "ทานมังสวิรัติ",
];
const defaultCheckedList = ["Apple", "Orange"];
const CheckboxGroup = Checkbox.Group;

export const LimitationPage = ({ setPage }) => {
  const [form] = Form.useForm();
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [spicy, setSpicy] = useState(false);
  const [sweet, setSweet] = useState(false);
  const [beef, setBeef] = useState(false);
  const [pork, setPork] = useState(false);
  const [seaFood, setSeaFood] = useState(false);
  const [vegan, setVegan] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
  };

  return (
    <div className="w-full h-screen text-2xl px-5 py-12">
      <div
        className="bg-gray-50 mx-auto p-5 text-yellow-400 font-bold border-black border-2 rounded-lg"
        css={css`
          height: 60% !important;
        `}
      >
        <div className="text-4xl text-black">
          มีข้อจำกัดที่อยากบอกให้เรารู้ไหม ?
        </div>

        <div className="mt-8 flex flex-col">
          <Checkbox
            className="ml-2"
            onChange={() => setSpicy(!spicy)}
            checked={spicy}
          >
            ไม่ทานเผ็ด
          </Checkbox>
          <Checkbox onChange={() => setSweet(!sweet)} checked={sweet}>
            ไม่ทานหวาน
          </Checkbox>
          <Checkbox onChange={() => setBeef(!beef)} checked={beef}>
            ไม่ทานเนื้อวัว
          </Checkbox>
          <Checkbox onChange={() => setPork(!pork)} checked={pork}>
            ไม่ทานเนื้อหมู
          </Checkbox>
          <Checkbox onChange={() => setSeaFood(!seaFood)} checked={seaFood}>
            ไม่ทายอาหารทะเล
          </Checkbox>
          <Checkbox onChange={() => setVegan(!vegan)} checked={vegan}>
            ทานมังสวีรัต
          </Checkbox>
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
            setPage(PAGE.SUBSCRIBE_PACKAGE);
          }}
        >
          ต่อไป <RightOutlined style={{ fontSize: "12px" }} />
        </PrimaryButton>
      </div>
    </div>
  );
};
