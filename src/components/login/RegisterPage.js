/** @jsxImportSource @emotion/react */
import { Form, Input, Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import { PrimaryButton } from "../PrimaryButton";

export const RegisterPage = ({ setIsLogin }) => {
  const history = useHistory();

  const [form] = Form.useForm();
  return (
    <div className="w-full h-screen text-2xl px-5 py-12">
      <div
        className="bg-gray-50 mx-auto p-5 text-yellow-400 font-bold border-black border-2 rounded-lg"
        css={css`
          height: 80% !important;
        `}
      >
        <div className="text-5xl text-black">เข้าสู่ระบบ</div>
        <div className="mt-6 text-xl text-gray-400">จัดการบัญชีของฉัน</div>
        <div className="mb-8 mt-8">
          <Form form={form}>
            <div className="text-black text-lg mb-2">อีเมล/เบอร์โทรศัพท์ </div>
            <Form.Item name="email">
              <Input type="email" placeholder="Email address" />
            </Form.Item>
            <div className="text-black text-lg mb-2 mt-4">รหัสผ่าน</div>
            <Form.Item name="password">
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <div className="text-black text-lg mb-2 mt-4">ยืนยันรหัสผ่าน</div>
            <Form.Item name="confirmPassword">
              <Input type="password" placeholder="Confirm Password" />
            </Form.Item>
          </Form>
        </div>
      </div>
      <PrimaryButton
        className="mt-8"
        onSubmit={() => {
          setIsLogin(true);
          localStorage.setItem("isLogin", true);
          history.push("/create-package");
        }}
      >
        ต่อไป
      </PrimaryButton>
    </div>
  );
};
