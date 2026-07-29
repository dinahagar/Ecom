import { Row } from "antd";
import React from "react";
import { useGetAllSensorsQuery } from "../../../../Services/sensors";
import { CameraCol, NextBtn, NextBtnDiv } from "../Camera/camera.styles";
import CameraCard from "../CameraCard/cameraCard";

const Sensors = ({
  activeKey,
  setActiveKey,
}: {
  activeKey: string;
  setActiveKey: any;
}) => {
  const { data: sensorsData } = useGetAllSensorsQuery({});

  const handleNextBtn = () => {
    if (Number(activeKey) < 4) {
      setActiveKey(String(Number(activeKey) + 1));
    }
  };

  return (
    <div>
      <Row
        gutter={24}
        style={{ display: "flex", justifyContent: "center" }}
        align="stretch"
      >
        {sensorsData?.items?.map((item: any) => {
          return (
            <CameraCol key={item.id} xs={24} sm={12} md={8} lg={8} xl={12}>
              <CameraCard item={item} key={item.id} />
            </CameraCol>
          );
        })}
      </Row>
      <NextBtnDiv>
        <NextBtn onClick={handleNextBtn}>Next: Choose your protection</NextBtn>
      </NextBtnDiv>
    </div>
  );
};

export default Sensors;
