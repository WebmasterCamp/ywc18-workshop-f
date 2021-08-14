/** @jsxImportSource @emotion/react */
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { css } from "@emotion/react";
import { PAGE } from "../choose-package/ChoosePackagePage";
import { PrimaryButton } from "../PrimaryButton";
import { LeftOutlined } from "@ant-design/icons";

export const PaymentPage = ({ setPage }) => {
  const [form] = Form.useForm();
  const [paymentMethod, setPaymentMethod] = useState(false);

  return (
    <div className="w-full h-full text-2xl px-5 py-12">
      <div
        className="bg-gray-50 mx-auto p-5 text-yellow-400 font-bold border-black border-2 rounded-lg"
        css={css`
          height: 80% !important;
        `}
      >
        <div className="text-5xl text-black">ชำระเงิน</div>
        <div className="text-lg text-black mt-8">ราคาทั้งหมด</div>
        <div className="mt-1 text-2xl font-bold">999 บาท</div>

        <div className="mt-8 text-base text-black">เลือกวิธีชำระเงิน</div>
        <div className="flex justify-between items-center">
          <Button
            className={`mr-2 w-full text-black border-none ${
              !paymentMethod && "bg-yellow-400 bg-opacity-40"
            }`}
            onClick={() => {
              setPaymentMethod(false);
            }}
          >
            ตัดบัญชีธนาคาร
          </Button>
          <Button
            className={`mr-2 w-full text-black border-none ${
              paymentMethod && "bg-yellow-400 bg-opacity-40"
            }`}
            onClick={() => {
              setPaymentMethod(true);
            }}
          >
            บัตรเครดิต
          </Button>
        </div>
        <div className="mb-8 mt-8 text-base">
          <Form form={form}>
            หมายเลขบัตร
            <Form.Item name="email">
              <Input type="email" placeholder="Email address" />
            </Form.Item>
            <div className="flex space-x-3 mt-8">
              <div>
                บัตรหมดอายุ
                <Form.Item name="password">
                  <Input type="password" placeholder="Password" />
                </Form.Item>
              </div>
              <div>
                รหัสหลังบัตร
                <Form.Item name="cvv">
                  <Input placeholder="cvv" />
                </Form.Item>
              </div>
            </div>
            <div className="mt-4">
              ชื่อบนบัตร (หากไม่มี กรุณาใส่ชื่อ-นามสกุล)
            </div>
            <Form.Item name="cardHolder">
              <Input placeholder="card holder" />
            </Form.Item>
          </Form>
        </div>
      </div>
      <PrimaryButton
        className="mt-8"
        onSubmit={() => {
          setPage(PAGE.ACCOUNT_INFO);
        }}
      >
        ชำระเงิน
      </PrimaryButton>
      <div
        className="flex justify-center items-center text-lg mt-2 cursor-pointer"
        onClick={() => {
          setPage(PAGE.CHOOSE_PACKAGE);
        }}
      >
        <LeftOutlined style={{ fontSize: "12px" }} /> ย้อนกลับ
      </div>
    </div>
  );
};
