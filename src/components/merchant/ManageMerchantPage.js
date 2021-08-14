import {Button, Form, Input} from "antd";
import {PAGE} from "../choose-package/ChoosePackagePage";
import React, {useState} from "react";


export const ManageMerchantPage = () => {
    return <div className="w-full h-full text-2xl">
        <div className="bg-white mx-auto p-5">
            <div className="text-5xl text-black">
                จัดการร้านค้า
            </div>
            <div className="text-xl text-gray-400 mb-3">
                ข้อมูลเฉพาะสำหรับร้านของคุณ
            </div>
            <div className="flex justify-evenly items-center border border-yellow-400">
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
            </div>
        </div>
    </div>
}