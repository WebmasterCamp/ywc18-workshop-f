/** @jsxImportSource @emotion/react */
import React from "react";
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import { PrimaryButton } from "../PrimaryButton";

export const LoginPage = ({ setIsLogin }) => {
  const [form] = Form.useForm();
  const history = useHistory();

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
          </Form>
          <PrimaryButton
            className="mt-8"
            onSubmit={() => {
              setIsLogin(true);
              localStorage.setItem("isLogin", true);
              history.push("/");
            }}
          >
            เข้าสู่ระบบ
          </PrimaryButton>
          <div
            className="text-gray-400  mb-4 cursor-pointer hover:text-color-700 text-2xl text-center mt-4 font-normal"
            onClick={() => {
              history.push("/register");
            }}
          >
            สมัครสมาชิก
          </div>
        </div>
      </div>
    </div>
  );
};
