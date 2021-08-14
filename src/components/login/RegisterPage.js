/** @jsxImportSource @emotion/react */
import { Form, Input, message , Button } from "antd";
import React , { useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import { PrimaryButton } from "../PrimaryButton";

export const RegisterPage = ({ setIsLogin }) => {
  const history = useHistory();

  const [form] = Form.useForm();
  const [checkCon , setCheckCon] = useState(false)
  const [formData , setFormData] = useState({email:"",password:"",conPassword:""})

  let changeHandle = (e) =>{
    e.preventDefault()
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  let checkVerify = () =>{
    if(!formData.email || !formData.password || !formData.conPassword){
      message.info("โปรกรอกข้อมูลให้ครบ")
    }else if(formData.password !== formData.conPassword){
      message.info("รหัสผ่านไม่ตรงกัน")
    }else{
      setIsLogin(true);
      localStorage.setItem("isLogin", true);
      history.push("/create-package");
    }
  }

  return (
    <div className="w-full max-w-xl h-screen text-2xl px-5 py-12 mx-auto">
      <div
        className="bg-gray-50 mx-auto p-5 text-yellow-400 font-bold border-black border-2 rounded-lg"
        css={css`
          height: 80% !important;
        `}
      >
        <div className="text-5xl text-black font-semibold">ลงทะเบียนใช้งาน<br/><span className="text-yellow-400">FoodAround</span></div>
        <div className="mb-8 mt-8">
          <Form form={form}>
            <div className="text-black text-lg mb-2 font-normal">อีเมล/เบอร์โทรศัพท์ </div>
            <Form.Item name="email">
              <Input type="email" placeholder="Email address" name="email" className="px-3 py-2 text-lg rounded-md" value={formData.email} onChange={changeHandle}/>
            </Form.Item>
            <div className="text-black text-lg mb-2 mt-4 font-normal">รหัสผ่าน</div>
            <Form.Item name="password">
              <Input type="password" placeholder="Password" name="password" className="px-3 py-2 text-lg rounded-md" value={formData.password} onChange={changeHandle}/>
            </Form.Item>
            <div className="text-black text-lg mb-2 mt-4 font-normal">ยืนยันรหัสผ่าน</div>
            <Form.Item name="confirmPassword">
              <Input type="password" placeholder="Confirm Password" name="conPassword" className="px-3 py-2 text-lg rounded-md" value={formData.conPassword} onChange={changeHandle}/>
            </Form.Item>
          </Form>
        </div>
      </div>
      <PrimaryButton
        className={`${checkCon && "bg-red-200"} bg-red-400 mt-8`}
        onSubmit={() => checkVerify()}
      >
        ต่อไป
      </PrimaryButton>
    </div>
  );
};
