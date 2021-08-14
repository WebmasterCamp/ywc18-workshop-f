/** @jsxImportSource @emotion/react */
import { Button, Form, Input } from "antd";
import React from "react";
import { PAGE } from "../choose-package/ChoosePackagePage";
import { css } from "@emotion/react";
import { PrimaryButton } from "../PrimaryButton";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const AccountInfoPage = ({ setPage }) => {
  const [form] = Form.useForm();
  return (
    <div className="w-full h-full text-2xl px-5 py-12">
      <div
        className="bg-gray-50 mx-auto p-5 text-yellow-400 font-bold border-black border-2 rounded-lg"
        css={css`
          height: 60% !important;
        `}
      >
        <div className="text-5xl text-black">ข้อมูลบัญชีของคุณ</div>
        <div className="mb-8 mt-8">
          <Form form={form}>
            ชื่อ-นามสกุล
            <Form.Item name="ืname">
              <Input />
            </Form.Item>
            เบอร์โทรศัพท์
            <Form.Item name="phone">
              <Input />
            </Form.Item>
            ที่อยู่สำหรับจัดส่งอาหาร
            <Form.Item name="address">
              <Input.TextArea />
            </Form.Item>
            อำเภอ/เขต
            <Form.Item name="district">
              <Input />
            </Form.Item>
            จังหวัด
            <Form.Item name="province">
              <Input />
            </Form.Item>
            รหัสไปรษณีย์
            <Form.Item name="postal">
              <Input />
            </Form.Item>
          </Form>
          <div className="flex space-x-3"></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button
          className="w-full hover:bg-color-600 cursor-pointer text-black border-none mt-16 rounded-lg hover:bg-yellow-600 h-16 mr-2 flex justify-center items-center"
          onClick={() => {
            setPage(PAGE.PAYMENT);
          }}
        >
          <LeftOutlined style={{ fontSize: "12px" }} /> ย้อนกลับ
        </Button>
        <PrimaryButton
          className="w-full  cursor-pointer text-black border-2 mt-16 rounded-lg ml-2 flex justify-center items-center"
          onSubmit={() => {
            setPage(PAGE.CHOOSE_FOOD);
          }}
        >
          ต่อไป <RightOutlined style={{ fontSize: "12px" }} />
        </PrimaryButton>
      </div>
    </div>
  );
};
