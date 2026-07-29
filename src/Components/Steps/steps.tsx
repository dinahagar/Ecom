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
import { useSelector } from 'react-redux'

const Steps: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("1");
  const { token } = theme.useToken();
  const selectedItemsNum = useSelector((state: RootState) => state.camera.selectedItems);

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
          selected={selectedItemsNum ?? 0}
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
          selected={selectedItemsNum ?? 0}
        />
      ),
      children: <Plan />,
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
          selected={selectedItemsNum ?? 0}
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
          selected={selectedItemsNum ?? 0}
        />
      ),
      children: <Protection activeKey={activeKey} setActiveKey={setActiveKey} />,
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
