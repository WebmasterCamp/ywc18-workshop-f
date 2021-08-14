/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import {Row, Col, message} from "antd";
import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import { PAGE } from "./ChoosePackagePage";
import { css } from "@emotion/css";

const imgs = [
  "assets/image 1.png",
  "assets/image 2.png",
  "assets/image 3.png",
  "assets/image 4.png",
  "assets/image 5.png",
  "assets/image 6.png",
  "assets/image 7.png",
  "assets/image 8.png",
  "assets/image 9.png",
  "assets/image 10.png",
  "assets/image 11.png",
  "assets/image 12.png",
];

export const ChooseFood = ({ setPage }) => {
  const [pic, setPic] = useState([]);
  return (
    <div className="w-full h-full text-2xl">
      <div className="bg-white mx-auto p-5">
        {/* ข้อมูลบัญชีของคุณ */}
        <div className="flex justify-between items-center">
          <div
            className="text-xs underline text-gray-700"
            onClick={() => {
              setPage(PAGE.LIMITATION);
            }}
          >
            ข้าม
          </div>
          <div
            className={`rounded-xl  w-12 h-8 flex justify-center items-center ${
              pic?.length > 0
                ? "bg-yellow-400 border-yellow-400 hover:bg-yellow-600 hover:border-yellow-600 cursor-pointer"
                : "bg-gray-400 border-none cursor-not-allowed"
            }`}
            onClick={() => {
              if (pic?.length > 0) {
                setPage(PAGE.LIMITATION);
              } else {
                message.error("กรุณาเลือกอย่างน้อย 1 รูป")
              }
            }}
          >
            <ArrowRightOutlined style={{ fontSize: "12px" }} />
          </div>
        </div>
        <div className="mb-2 mt-4">บอกเราหน่อยว่าอยากกินอะไร</div>
        <div className="mb-8 text-sm text-gray-700">
          กรุณาเลือกอย่างน้อย 1 รูป
        </div>
        <Row gutter={[8, 8]}>
          {imgs?.map((x) => {
            const isSelected = !!pic?.find((pic) => pic === x);
            return (
              <Col
                span={8}
                className="relative cursor-pointer"
                onClick={() => {
                  if (isSelected) {
                    setPic(pic?.filter((y) => !(y == x)));
                  } else {
                    setPic([...pic, x]);
                  }
                }}
              >
                <img
                  className="rounded object-cover"
                  src={x}
                  style={{ height: "108px", width: "100%" }}
                />
                {isSelected && (
                  <CheckCircleFilled
                    className="absolute top-0 right-0"
                    style={{
                      color: "#FFBD24",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
