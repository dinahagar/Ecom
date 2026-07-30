import { RootState } from "../../../../Store/store";
import { useSelector } from "react-redux";
import {
  NameP,
  ReviewImg,
  ReviewImgDiv,
  ReviewRow,
  SectionP,
} from "../ReviewItems/reviewItems.style";
import { Col } from "antd";
import Price from "../../../Steps/components/Price/price";
import { useGetAllProtectionApiQuery } from "../../../../Services/protection";
import { CameraItem } from "../../../../Interfaces/types";

const ReviewProtection = () => {
  const { data: protectionData } = useGetAllProtectionApiQuery({});
  const quantities = useSelector((state: RootState) => state.camera.quantities);

  const reviewItems = protectionData?.items?.filter(
    (item: CameraItem) => (quantities[item.id] ?? 0) > 0,
  );

  return (
    <div>
      {reviewItems?.length > 0 && (
        <>
          <SectionP>{protectionData?.section}</SectionP>
        </>
      )}
      {reviewItems?.map((item: CameraItem) => {
        return (
          <div key={item.id}>
            <ReviewRow style={{ display: "flex", alignItems: "center" }}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <ReviewImgDiv>
                  <ReviewImg src={item.img} alt="" />
                  <NameP>{item.title}</NameP>
                </ReviewImgDiv>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Price
                  item={item}
                  quantities={quantities}
                  minusButtonStyle={{
                    background: "#FFFFFF",
                    color: "#575757",
                    border: "none",
                  }}
                  plusButtonStyle={{
                    background: "#FFFFFF",
                    color: "#575757",
                    border: "none",
                  }}
                  oldPriceStyle={{
                    fontSize: "14px",
                    color: "#6F7882",
                  }}
                  newPriceStyle={{
                    fontSize: "14px",
                    color: "#4E2FD2",
                  }}
                />
              </Col>
            </ReviewRow>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewProtection;
