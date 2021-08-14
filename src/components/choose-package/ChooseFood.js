import React, { useState } from "react";
import { Row, Col } from "antd";
import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import { PAGE } from "./ChoosePackagePage";

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
              setPage(PAGE.ACCOUNT_INFO);
            }}
          >
            ข้าม
          </div>
          <div
            className="rounded-xl bg-yellow-400 border-yellow-400 w-12 h-8 flex justify-center items-center hover:bg-yellow-600 hover:border-yellow-600 cursor-pointer"
            onClick={() => {
              setPage(PAGE.LIMITATION);
            }}
          >
            <ArrowRightOutlined style={{ fontSize: "12px" }} />
          </div>
        </div>
        <div className="mb-4 mt-8">บอกเราหน่อยว่าอยากกินอะไร</div>
        <div className="mb-8 text-sm text-gray-700">
          กรุณาเลือกอย่างน้อย 1 รูป
        </div>
        <Row gutter={[8, 8]}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16]?.map((x) => {
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
                <img className="rounded" src={"assets/1.png"} />
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
