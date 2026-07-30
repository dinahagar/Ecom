import { CSSProperties, useState } from "react";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import Camera from "./components/Camera/camera";
import Plan from "./components/Plan/plan";
import Sensors from "./components/Sensors/sensors";
import Protection from "./components/Protection/protection";
import cameraIcon from "../../icons/camera.png";
import planIcon from "../../icons/plan.png";
import sensorsIcon from "../../icons/sensors.png";
import protectionIcon from "../../icons/protection.png";
import Header from "./components/Header/header";
import { RootState } from "../../Store/store";
import { useSelector } from "react-redux";
import { useGetAllCamerasQuery } from "../../Services/camera";
import { useGetAllSensorsQuery } from "../../Services/sensors";
import { useGetAllProtectionApiQuery } from "../../Services/protection";
import { CameraItem } from "../../Interfaces/types";

const Steps: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("1");
  const { token } = theme.useToken();
  const { data: cameraData } = useGetAllCamerasQuery({});
  const { data: sensorsData } = useGetAllSensorsQuery({});
  const { data: protectionData } = useGetAllProtectionApiQuery({});
  const quantities = useSelector((state: RootState) => state.camera.quantities);
  const planType = useSelector((state: RootState) => state.plan.planType);

  const calculate = (items: CameraItem[], quantities: Record<number, number>) => {
    return items?.filter((item: CameraItem) => (quantities[item.id] ?? 0) > 0).length ?? 0;
  }
  const cameraSelected = calculate(cameraData?.items, quantities);
  const sensorSelected = calculate(sensorsData?.items, quantities);
  const protectionSelected = calculate(protectionData?.items, quantities);
  const planSelected = planType ? 1 : 0;

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle,
  ) => [
    {
      key: "1",
      label: (
        <Header
          step="Step 1 of 4"
          icon={cameraIcon}
          title="Choose your cameras"
          isActive={activeKey === "1"}
          selected={cameraSelected}
        />
      ),
      children: <Camera activeKey={activeKey} setActiveKey={setActiveKey} />,
      style: {
        ...panelStyle,
        background: activeKey === "1" ? "#EDF4FF" : "#fff",
      },
      showArrow: false,
    },
    {
      key: "2",
      label: (
        <Header
          step="Step 2 of 4"
          icon={planIcon}
          title="Choose your plan"
          isActive={activeKey === "2"}
          selected={planSelected}
        />
      ),
      children: <Plan activeKey={activeKey} setActiveKey={setActiveKey} />,
      style: {
        ...panelStyle,
        background: activeKey === "2" ? "#EDF4FF" : "#fff",
      },
      showArrow: false,
    },
    {
      key: "3",
      label: (
        <Header
          step="Step 3 of 4"
          icon={sensorsIcon}
          title="Choose your sensors"
          isActive={activeKey === "3"}
          selected={sensorSelected}
        />
      ),
      children: <Sensors activeKey={activeKey} setActiveKey={setActiveKey} />,
      style: {
        ...panelStyle,
        background: activeKey === "3" ? "#EDF4FF" : "#fff",
      },
      showArrow: false,
    },
    {
      key: "4",
      label: (
        <Header
          step="Step 4 of 4"
          icon={protectionIcon}
          title="Add extra protection"
          isActive={activeKey === "4"}
          selected={protectionSelected}
        />
      ),
      children: (
        <Protection />
      ),
      style: {
        ...panelStyle,
        background: activeKey === "4" ? "#EDF4FF" : "#fff",
      },
      showArrow: false,
    },
  ];

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Collapse
      accordion
      activeKey={activeKey}
      bordered={false}
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
      onChange={(key) => setActiveKey(key[0])}
    />
  );
};

export default Steps;
