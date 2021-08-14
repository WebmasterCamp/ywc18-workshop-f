import { Button, Form, Input, Checkbox } from "antd";
import React from "react";
import { PAGE } from "../choose-package/ChoosePackagePage";

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
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);

  const onChange = (list) => {
    setCheckedList(list);
  };

  return (
    <div className="w-full h-full text-2xl">
      <div className="bg-white mx-auto p-5">
        มีข้อจำกัดที่อยากบอกให้เรารู้ไหม ?
        <div className="mt-8">
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </div>
        <div className="flex space-x-3">
          <Button
            className="w-full hover:bg-color-600 cursor-pointer text-black border-none mt-16 rounded-lg hover:bg-yellow-600"
            onClick={() => {
              setPage(PAGE.CHOOSE_FOOD);
            }}
          >
            ยอดกลับ
          </Button>
          <Button
            className="w-full bg-yellow-400 hover:bg-color-600 cursor-pointer text-black border-none mt-16 rounded-lg hover:bg-yellow-600"
            onClick={() => {
              setPage(PAGE.LIMITATION);
            }}
          >
            ต่อไป
          </Button>
        </div>
      </div>
    </div>
  );
};
