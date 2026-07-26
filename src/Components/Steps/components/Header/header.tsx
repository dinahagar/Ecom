import { Divider } from "antd";
import React from "react";
import { HeaderP, ImageDiv, StepHeaderDiv, StepP } from "./header.styles";
import { CaretDownOutlined } from "@ant-design/icons";

const Header = ({
  step,
  icon,
  title,
  isActive,
  selected,
}: {
  step: string;
  icon: string;
  title: string;
  isActive: boolean;
  selected: number;
}) => {
  return (
    <div>
      <StepP> {step} </StepP>
      <Divider
        style={{ margin: 0, background: "#1F1F1F", height: "0.5px" }}
      ></Divider>
      <StepHeaderDiv>
        <ImageDiv>
          <img src={icon} alt="" style={{ width: "26px", height: "26px", marginTop: '4px' }} />
          <HeaderP>{title}</HeaderP>
        </ImageDiv>
        <div style={{ color: "#4E2FD2", display: "flex", gap: "5px" }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
            <p>{selected}</p>
            <p>selected</p>
          </div>
          <CaretDownOutlined rotate={isActive ? 180 : 0} />
        </div>
      </StepHeaderDiv>
    </div>
  );
};

export default Header;
