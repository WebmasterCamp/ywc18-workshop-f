/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import { PrimaryButton } from "../PrimaryButton";

export const LoginPage = ({ setIsLogin, subscribed, user }) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="w-full max-w-xl h-screen text-2xl px-5 py-12 mx-auto">
      <div
        className="bg-gray-50 mx-auto p-5 text-yellow-400 font-bold border-black border-2 rounded-lg"
        css={css``}
      >
        <div className="text-5xl text-black">เข้าสู่ระบบ</div>
        <div className="mt-6 text-xl text-gray-400 font-normal">
          จัดการบัญชีของฉัน
        </div>
        <div className="mb-8 mt-8 font-normal">
          <Form form={form}>
            <div className="text-black text-lg mb-2">อีเมล/เบอร์โทรศัพท์ </div>
            <Form.Item name="email" required>
              <Input
                type="email"
                placeholder="Email address"
                onChange={(e) => setname(e.target.value)}
              />
            </Form.Item>
            <div className="text-black text-lg mb-2 mt-4">รหัสผ่าน</div>
            <Form.Item name="password" required>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Item>
          </Form>
        </div>
      </div>
      <PrimaryButton
        className="mt-8"
        onSubmit={() => {
          if (user !== name) {
            message.error("ไม่พบอีเมลหรือเบอร์โทรศัพท์นี้");
          } else {
            if (name !== "" && password !== "") {
              setIsLogin(true);
              localStorage.setItem("isLogin", true);
              history.push("/");
            } else {
              message.error("กรุณากรอก อีเมลหรือพาสเวิร์ด");
            }
          }
        }}
      >
        เข้าสู่ระบบ
      </PrimaryButton>
      <button
        className="text-gray-400  mb-4 cursor-pointer hover:text-color-700 text-2xl mx-auto w-full mt-4 font-normal"
        onClick={() => {
          history.push("/register");
        }}
      >
        สมัครสมาชิก
      </button>
    </div>
  );
};
