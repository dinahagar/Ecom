import { Row } from "antd";
import React from "react";
import { useGetAllProtectionApiQuery } from "../../../../Services/protection";
import { CameraCol } from "../Camera/camera.styles";
import CameraCard from "../CameraCard/cameraCard";

const Protection = ({
  activeKey,
  setActiveKey,
}: {
  activeKey: string;
  setActiveKey: any;
}) => {
  const { data: protectionData } = useGetAllProtectionApiQuery({});

  return (
    <div>
      <Row
        gutter={24}
        style={{ display: "flex", justifyContent: "center" }}
        align="stretch"
      >
        {protectionData?.items?.map((item: any) => {
          return (
            <CameraCol key={item.id} xs={24} sm={12} md={8} lg={8} xl={12}>
              <CameraCard item={item} key={item.id} />
            </CameraCol>
          );
        })}
      </Row>
    </div>
  );
};

export default Protection;
