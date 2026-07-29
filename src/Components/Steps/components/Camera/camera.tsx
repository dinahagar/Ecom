import { Row } from "antd";
import { useGetAllCamerasQuery } from "../../../../Services/camera";
import { CameraCol, NextBtn, NextBtnDiv } from "./camera.styles";
import CameraCard from "../CameraCard/cameraCard";

const Camera = ({
  activeKey,
  setActiveKey,
}: {
  activeKey: string;
  setActiveKey: any;
}) => {
  const { data } = useGetAllCamerasQuery({});

  const handleNextBtn = () => {
    if (Number(activeKey) < 4) {
      setActiveKey(String(Number(activeKey) + 1));
    }
  };

  return (
    <div>
      <Row gutter={24} style={{ display: "flex", justifyContent: "center" }} align="stretch">
        {data?.map((item: any) => {
          return (
            <CameraCol key={item.id} xs={24} sm={12} md={8} lg={8} xl={12}>
              <CameraCard item={item} key={item.id} />
            </CameraCol>
          );
        })}
      </Row>
      <NextBtnDiv>
        <NextBtn onClick={handleNextBtn}>Next: Choose your plan</NextBtn>
      </NextBtnDiv>
    </div>
  );
};

export default Camera;
